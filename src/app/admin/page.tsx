'use client';

import { useState } from 'react';
import Header from '@/components/layout/header';
import styles from './page.module.css';
import { CategoriaProjeto, Projeto } from '@/types/project';

export default function AdminPage() {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState<CategoriaProjeto>('Programação');
  const [descricao, setDescricao] = useState('');
  const [data, setData] = useState('');
  const [imagensInput, setImagensInput] = useState('');
  const [codigoPreview, setCodigoPreview] = useState('');
  const [linkExterno, setLinkExterno] = useState('');
  const [mensagensSucesso, setMensagensSucesso] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const imagens = imagensInput
      .split(',')
      .map((url) => url.trim())
      .filter((url) => url.length > 0);

    const novoProjeto: Projeto = {
      id: Date.now().toString(),
      titulo,
      categoria,
      descricao,
      data: data || undefined,
      imagens,
      codigoPreview: codigoPreview || undefined,
      linkExterno: linkExterno || undefined,
    };

    console.log('Projeto cadastrado:', novoProjeto);
    setMensagensSucesso('Projeto cadastrado com sucesso!');

    setTitulo('');
    setCategoria('Programação');
    setDescricao('');
    setData('');
    setImagensInput('');
    setCodigoPreview('');
    setLinkExterno('');

    setTimeout(() => setMensagensSucesso(''), 4000);
  };

  return (
    <main className={styles.main}>
      <Header />

      <section className={styles.container}>
        <h1 className={styles.title}>Painel Admin</h1>
        <p className={styles.subtitle}>Cadastre e gerencie os projetos do portfólio</p>

        {/* Alerta de sucesso */}
        {mensagensSucesso && (
          <div className={styles.successAlert}>{mensagensSucesso}</div>
        )}

        {/* Formulario principal */}
        <form onSubmit={handleSubmit} className={styles.form}>
          
          {/* LINHA 1: Título e Categoria */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="titulo">Título *</label>
              <input
                id="titulo"
                type="text"
                required
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
                placeholder="Ex: API Rest com FastAPI"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="categoria">Categoria *</label>
              <select
                id="categoria"
                value={categoria}
                onChange={(e) => setCategoria(e.target.value as CategoriaProjeto)}
              >
                <option value="Programação">Programação</option>
                <option value="Design">Design</option>
                <option value="Literatura">Literatura</option>
                <option value="Outros">Outros</option>
              </select>
            </div>
          </div>

          {/* LINHA 2: Data e Link Externo */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="data">Data/Ano</label>
              <input
                id="data"
                type="text"
                value={data}
                onChange={(e) => setData(e.target.value)}
                placeholder="Ex: 2026"
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="linkExterno">Link Externo</label>
              <input
                id="linkExterno"
                type="url"
                value={linkExterno}
                onChange={(e) => setLinkExterno(e.target.value)}
                placeholder="https://github.com/..."
              />
            </div>
          </div>

          {/* CAMPO: Descrição Completa */}
          <div className={styles.field}>
            <label htmlFor="descricao">Descrição Completa *</label>
            <textarea
              id="descricao"
              rows={4}
              required
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Descreva as tecnologias e detalhes do projeto..."
            />
          </div>

          {/* CAMPO: URLs das Imagens */}
          <div className={styles.field}>
            <label htmlFor="imagens">URLs das Imagens (separadas por vírgula)</label>
            <input
              id="imagens"
              type="text"
              value={imagensInput}
              onChange={(e) => setImagensInput(e.target.value)}
              placeholder="/astra pfp.jpg, /perfil.jpg"
            />
          </div>

          {/* CAMPO: Preview de Código */}
          <div className={styles.field}>
            <label htmlFor="codigoPreview">Preview de Código (Opcional)</label>
            <textarea
              id="codigoPreview"
              rows={4}
              className={styles.codeTextarea}
              value={codigoPreview}
              onChange={(e) => setCodigoPreview(e.target.value)}
              placeholder="from fastapi import FastAPI..."
            />
          </div>

          {/* BOTÃO DE ENVIO */}
          <button type="submit" className={styles.submitBtn}>
            Cadastrar Projeto
          </button>
        </form>
      </section>
    </main>
  );
}