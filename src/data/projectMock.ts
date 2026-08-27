import { Projeto } from '@/types/project';

export const PROJETOS_MOCK: Projeto[] = [
  {
    id: '1',
    titulo: 'API Rest com FastAPI',
    descricao: 'API desenvolvida em Python para processamento e consulta de dados públicos com testes automatizados.',
    categoria: 'Programação',
    data: '2026',
    imagens: ['/next.svg'],
    codigoPreview: 'from fastapi import FastAPI\n\napp = FastAPI()\n\n@app.get("/")\ndef read_root():\n    return {"status": "online"}',
    linkExterno: 'https://github.com'
  },
  {
    id: '2',
    titulo: 'Identidade Visual & Branding',
    descricao: 'Vetorização e layout completo para identidade visual de marca.',
    categoria: 'Design',
    data: '2025',
    imagens: ['/globe.svg'],
    linkExterno: 'https://behance.net'
  }
];