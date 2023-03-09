const initialState = {
  producers: [
    {
      id: 1,
      name: 'Produtor 1',
      cpf: '11122233344',
      city: 'São Paulo',
      state: 'SP',
      farmTotal: 1000,
      arableLand: 500,
      vegetationArea: 300,
      crops: ['Soja', 'Milho'],
    },
    {
      id: 2,
      name: 'Produtor 2',
      cpf: '22233344455',
      city: 'Rio de Janeiro',
      state: 'RJ',
      farmTotal: 2000,
      arableLand: 1000,
      vegetationArea: 500,
      crops: ['Café', 'Cana de Açúcar'],
    },
  ],
};

export default initialState;
