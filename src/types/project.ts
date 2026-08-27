export type CategoriaProjeto = 'Programação' | 'Design' | 'Literatura' | 'Outros';

export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  categoria: CategoriaProjeto;
  data?: string;
  imagens: string[];       // URLs das imagens/prints
  svgs?: string[];         // SVGs para artes/vetores
  codigoPreview?: string;  // Trecho de código para projetos de TI
  linkExterno?: string;    // GitHub, Behance, Wattpad, Amazon, LinkedIn
}