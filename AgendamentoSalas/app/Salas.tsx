interface Task {
    id: number;
    name: string;
    available: boolean;
    image: string;
  }
  
  const Salas: Task[] = [
    {
      id: 1,
      name: 'A Torno CNC Fer',
      available: true,
      image: 'Torno CNC Fer',
    },
    {
      id: 2,
      name: 'A Centro Fer',
      available: true,
      image: 'Centro Fer',
    },
    {
      id: 3,
      name: 'A Eletroerosão Fer',
      available: true,
      image: 'Eletroerosão Fer',
    },
    {
      id: 4,
      name: 'A Solda Elétrica',
      available: true,
      image: 'SOLDa Elétrica',
    },
    {
      id: 5,
      name: 'A Solda Oxiacetilenica',
      available: true,
      image: 'SOLDa Oxiacetilenica',
    },
    {
      id: 6,
      name: 'A Plástico',
      available: true,
      image: 'Plástico',
    },
    {
      id: 7,
      name: 'A Plástico INJ SEM',
      available: true,
      image: 'Plástico INJ SEM',
    },
    {
      id: 8,
      name: 'A06 CAD/CAE/CAM',
      available: true,
      image: 'CAD/CAE/CAM',
    },
    {
      id: 9,
      name: 'A07 CAD/CAE/CAM',
      available: true,
      image: 'CAD/CAE/CAM',
    },
    {
      id: 10,
      name: 'A1 Ajustagem',
      available: true,
      image: 'Ajustagem',
    },
    {
      id: 11,
      name: 'A12 Moldagem de peças',
      available: true,
      image: 'Moldagem de peças',
    },
    {
      id: 12,
      name: 'A2 Ajustagem',
      available: true,
      image: 'Ajustagem',
    },
    {
      id: 13,
      name: 'A3 Ajustagem Fer',
      available: true,
      image: 'Ajustagem Fer',
    },
    {
      id: 14,
      name: 'B06 Metrologia Avançada',
      available: true,
      image: 'Metrologia Avançada',
    },
    {
      id: 15,
      name: 'B07 Metrologia Básica',
      available: true,
      image: 'Metrologia Básica',
    },
    {
      id: 16,
      name: 'C CNC CENTRO',
      available: true,
      image: 'CNC CENTRO',
    },
    {
      id: 17,
      name: 'C CNC TORNO',
      available: true,
      image: 'CNC TORNO',
    },
    {
      id: 18,
      name: 'C Manutenção',
      available: true,
      image: 'Manutenção',
    },
    {
      id: 19,
      name: 'C Mec Auto',
      available: true,
      image: 'Mec Auto',
    },
    {
      id: 20,
      name: 'C Elétrica I',
      available: true,
      image: 'Elétrica I',
    },
    {
      id: 21,
      name: 'C Elétrica II',
      available: true,
      image: 'Elétrica II',
    },
    {
      id: 22,
      name: 'C Elétrica III',
      available: true,
      image: 'Elétrica III',
    },
    {
      id: 23,
      name: 'C Auditório',
      available: true,
      image: 'Auditório',
    },
    {
      id: 24,
      name: 'C03 Lab. Máq II',
      available: true,
      image: 'Lab. Máq II',
    },
    {
      id: 25,
      name: 'C04 Lab. Máq I',
      available: true,
      image: 'Lab. Máq I',
    },
    {
      id: 26,
      name: 'C05 Lab. CLP II',
      available: true,
      image: 'Lab. CLP II',
    },
    {
      id: 27,
      name: 'C06 Lab. CLP I',
      available: true,
      image: 'Lab. CLP I',
    },
    {
      id: 28,
      name: 'C07 Lab. Automação',
      available: true,
      image: 'Lab. Automação',
    },
    {
      id: 29,
      name: 'C08 Lab. Automação Industrial',
      available: true,
      image: 'Lab. Automação Industrial',
    },
    {
      id: 30,
      name: 'C09 Informática',
      available: true,
      image: 'Informática',
    },
    {
      id: 31,
      name: 'C10 Informática',
      available: true,
      image: 'Informática',
    },
    {
      id: 32,
      name: 'C11 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 33,
      name: 'C12 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 34,
      name: 'C13 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 35,
      name: 'C14 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 36,
      name: 'C15 Lab Fís. Quim',
      available: true,
      image: 'Lab Fís. Quim',
    },
    {
      id: 37,
      name: 'C16 Informática',
      available: true,
      image: 'Informática',
    },
    {
      id: 38,
      name: 'C18 FRC',
      available: true,
      image: 'FRC',
    },
    {
      id: 39,
      name: 'C20 Sala de Desenho',
      available: true,
      image: 'Sala de Desenho',
    },
    {
      id: 40,
      name: 'C41 Lab Automotivo',
      available: true,
      image: 'Lab Automotivo',
    },
    {
      id: 41,
      name: 'D21 CAD/CAE/CAM',
      available: true,
      image: 'CAD/CAE/CAM',
    },
    {
      id: 42,
      name: 'D22 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 43,
      name: 'D23 Pneumática',
      available: true,
      image: 'Pneumática',
    },
    {
      id: 44,
      name: 'D24 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 45,
      name: 'D25 Hidraúlica',
      available: true,
      image: 'Hidraúlica',
    },
    {
      id: 46,
      name: 'D26 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 47,
      name: 'D28 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 48,
      name: 'D29 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 49,
      name: 'D30 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 50,
      name: 'D31 Sala de aula',
      available: true,
      image: 'Sala de aula',
    },
    {
      id: 51,
      name: 'T1 Tornearia',
      available: true,
      image: 'Tornearia',
    },
    {
      id: 52,
      name: 'T2 Tornearia',
      available: true,
      image: 'Tornearia',
    },
    {
      id: 53,
      name: 'T3 Tornearia Fer',
      available: true,
      image: 'Tornearia Fer',
    },
  ];
  
  export default Salas;