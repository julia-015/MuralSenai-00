# ProjetoAgendamentoSalas

Nosso projeto de agendamento de salas foi desenvolvido para conter uma maior praticidade no gerenciamento e organização do agendamento das salas de aula, laboratórios de informática e oficinas da Instituição Senai Jundiaí. Este sistema visa otimizar o uso dos espaços disponíveis, garantindo que professores e coordenadores possam agendar e gerenciar as salas de maneira eficiente e propicia para manter a organização.

O sistema do Projeto de Agendamento de Salas possuí 3 telas, sendo elas:

### 1° tela

> ***Login:***
> 
> 
> É permitido a entrada da coordenação e professores para utilização de suas permissões dentro do site. (Cada tipo de usuário tem permissões diferentes).
> 
> ***Cadastro:***
> 
> Será permitido apenas para a coordenação, podendo cadastrar todos os professores que exercem seu trabalho dentro da instituição. Os professores não poderão fazer nenhum tipo de cadastro, essa disponibilidade será apenas para os superiores, podendo a qualquer momento realizar esse funcionamento.
> 

### 2° tela

> ***Verificar salas:***
> 
> 
> Todas as salas (salas de aula, oficinas, laboratórios e salas especiais) terão sua descrição, que podem ser acessadas pelos professores, obtendo todas as informações necessárias e detalhadas sobre cada sala, incluindo o número de assentos, recursos disponíveis naquele local (como projetores, computadores, etc.) e localização. Sobre os itens disponíveis, disponibilidade de alunos e para que podem ser utilizadas.
> 
> ***Disponibilidade:***
> 
> Ficará visível para todos os cadastrados a disponibilidade de uma determinada sala, em relação de dias disponíveis e horários que cada sala está disponível para próximos agendamentos, permitindo que o professor encontre facilmente um espaço que atenda às suas necessidades.
> 

### 3° tela

> ***Reservar Ambiente:***
Uma página que contenha as opções de todas as salas disponíveis em determinada data e horário, permitindo que o professor reserve esse ambiente específico. Confirmando o agendamento de acordo com a disponibilidade. (Será disponível apenas para a coordenação a opção de cancelar determinado agendamento feito pelo professor).
> 

---

## **Processo de Reserva**

### **Tela de Reserva de Ambientes**

- **Descrição:** Página dedicada à reserva de ambientes.
- **Funcionalidades:**
    - **Opções de Salas Disponíveis:** Exibe as opções de salas disponíveis para determinados dias e horários.
    - **Reserva de Ambientes:** Permite que usuários reservem salas conforme a disponibilidade.
    - **Cancelamento de Reservas:** Apenas a coordenação pode cancelar reservas existentes.

---

## **Permissões dos Usuários**

### **Coordenação**

- **Permissões:**
    - Acesso a todas as funcionalidades do sistema.
    - Cadastro e gerenciamento de professores.
    - Exclusão de reservas.
    - Visualização e gerenciamento completo das salas e suas disponibilidades.

### **Professores**

- **Permissões:**
    - Acesso às funcionalidades de login e visualização de salas.
    - Realização de reservas conforme a disponibilidade.
    - Visualização da disponibilidade das salas.
    - Não possuem permissão para cadastrar professores ou excluir reservas.

---

## **Arquitetura do Sistema**

### **Visão Geral**

- **Frontend:** Interface do usuário desenvolvida para proporcionar uma experiência intuitiva e eficiente.
- **Backend:** Servidor responsável por gerenciar a lógica de negócios, autenticação e comunicação com o banco de dados.
- **Banco de Dados:** Armazena informações sobre usuários, salas, reservas e outras entidades relevantes para o bom funcionamento do projeto.

### **Componentes**

- **Autenticação:** Gerencia o login e as permissões dos usuários.
- **Gerenciamento de Usuários:** Funcionalidade exclusiva da coordenação para cadastro e gerenciamento de professores.
- **Gerenciamento de Salas:** Inclui a visualização, descrição e disponibilidade das salas.
- **Reservas:** Funcionalidade que permite a realização e cancelamento de reservas de salas. (As funcionalidades variam dependendo do tipo de usuário que está acessando).
