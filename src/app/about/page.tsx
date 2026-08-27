import Header from '@/components/layout/header';
import styles from './page.module.css';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.container}>
        {/* Bloco de Apresentação */}
        <div className={styles.heroSection}>
          <h1 className={styles.title}>Sobre Mim</h1>
          
          <div className={styles.heroContent}>
            <div className={styles.profileImageWrapper}>
              <Image
                src="/perfil.jpg"
                alt="Foto de perfil"
                width={180}
                height={180}
                className={styles.profileImage}
                priority
              />
            </div>
            <p className={styles.bio}>
              Desenvolvedor com foco em <strong>Engenharia de Software</strong>, focado no desenvolvimento de APIs robustas, arquitetura de bancos de dados e segurança de dados. Combinando a bagagem de anos no <strong>Design Gráfico</strong> e preparação de pré-impressão com a precisão do código, crio aplicações eficientes e com interfaces bem estruturadas.
            </p>
          </div>
        </div>

        {/* Habilidades e Tecnologias */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Habilidades & Especialidades</h2>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <h3>Desenvolvimento Backend</h3>
              <p>Construção de APIs RESTful, segurança e modelagem relacional de alta performance.</p>
              <div className={styles.tags}>
                <span>Python</span>
                <span>FastAPI</span>
                <span>C++</span>
                <span>PostgreSQL</span>
                <span>SQLite</span>
                <span>SQL</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Frontend & Mobile</h3>
              <p>Criação de interfaces reativas, componentização e prototipagem.</p>
              <div className={styles.tags}>
                <span>JavaScript</span>
                <span>React Native</span>
                <span>HTML5 / CSS3</span>
                <span>Next.js</span>
              </div>
            </div>

            <div className={styles.skillCard}>
              <h3>Design & Identidade Visual</h3>
              <p>Vetorização, imposição de layout e edição de arte com histórico profissional em gráfica.</p>
              <div className={styles.tags}>
                <span>CorelDRAW</span>
                <span>Photoshop</span>
                <span>Vetorização</span>
                <span>UI/UX</span>
                <span>E tudo o que tem direito</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha do Tempo / Trajetória */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Trajetória</h2>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <span className={styles.year}>Atualmente</span>
              <h3>Engenharia de Software</h3>
              <p>Graduação focada em algoritmos, arquitetura de software, estrutura de dados e desenvolvimento full-stack.</p>
            </div>

            <div className={styles.timelineItem}>
              <span className={styles.year}>Freelance & Gráfica</span>
              <h3>Design Gráfico & Arte-Finalista</h3>
              <p>Atuação com criação de identidades visuais, fechamento de arquivo e produção gráfica comercial.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}