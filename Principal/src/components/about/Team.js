import React from 'react';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Dr. João Silva', role: 'Diretor Médico', image: '/images/team-member-1.jpg' },
    { name: 'Maria Santos', role: 'Gerente de Operações', image: '/images/team-member-2.jpg' },
    { name: 'Carlos Oliveira', role: 'Especialista em Produtos', image: '/images/team-member-3.jpg' },
    { name: 'Ana Rodrigues', role: 'Coordenadora de Logística', image: '/images/team-member-4.jpg' },
  ];

  return (
    <section className="team">
      <div className="container">
        <h2>Nossa Equipe</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;