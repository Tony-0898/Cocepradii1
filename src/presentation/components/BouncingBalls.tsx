import React, { useEffect, useState } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import { accelerometer, setUpdateIntervalForType, SensorTypes } from 'react-native-sensors';

const { width, height } = Dimensions.get('window');

const Ball = ({ x, y, size, color }) => (
  <Animated.View
    style={{
      position: 'absolute',
      width: size,
      height: size,
      backgroundColor: color,
      borderRadius: size / 2,
      transform: [{ translateX: x }, { translateY: y }]
    }}
  />
);

const BouncingBalls = () => {
  const [balls, setBalls] = useState([
    { x: new Animated.Value(100), y: new Animated.Value(100), size: 50, color: 'red' },
    { x: new Animated.Value(200), y: new Animated.Value(200), size: 70, color: 'blue' },
    { x: new Animated.Value(150), y: new Animated.Value(150), size: 60, color: 'green' },
  ]);
  
  useEffect(() => {
    setUpdateIntervalForType(SensorTypes.accelerometer, 16); // Actualiza cada 16ms (~60fps)

    const subscription = accelerometer.subscribe(({ x, y }) => {
      balls.forEach(ball => {
        const velocityX = new Animated.Value(x * 100);
        const velocityY = new Animated.Value(y * 100);

        Animated.spring(ball.x, {
          toValue: ball.x._value + velocityX._value,
          useNativeDriver: false,
        }).start();

        Animated.spring(ball.y, {
          toValue: ball.y._value + velocityY._value,
          useNativeDriver: false,
        }).start();
      });
    });

    return () => subscription.unsubscribe();
  }, [balls]);

  return (
    <View style={{ flex: 1, backgroundColor: '#000' }}>
      {balls.map((ball, index) => (
        <Ball key={index} x={ball.x} y={ball.y} size={ball.size} color={ball.color} />
      ))}
    </View>
  );
};

export default BouncingBalls;
