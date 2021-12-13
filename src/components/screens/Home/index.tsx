import React, { useState } from 'react';
import { RenderPlanet } from '../../RenderPlanet';

import { Container, Content, FlatList } from './styles';

interface PlanetProps {
  id: number;
  title: string;
}

export function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('');

  const [planet, setPlanet] = useState<PlanetProps[]>([
    {
      id: 1,
      title: 'Jupiter'
    },
    {
      id: 2,
      title: 'Saturno'
    },
    {
      id: 3,
      title: 'Urano'
    },
    {
      id: 4,
      title: 'Netuno'
    },
    {
      id: 5,
      title: 'Marte'
    },
    {
      id: 6,
      title: 'Venus'
    }

  ]);

  function handleClick(item) {
    setSelectedPlanet(item);
  }

  return (
    <Container>
      <Content>
        <FlatList
          data={planet}
          keyExtractor={(item) => item.id}
          numColumns={2}
          renderItem={({ item }) => (
            <RenderPlanet
              data={item}
              onPress={() => handleClick(item.id)}
              isActive={selectedPlanet === item.id}
            />
          )} />
      </Content>
    </Container>
  )
}