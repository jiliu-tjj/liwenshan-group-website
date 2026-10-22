export interface Publication {
  title: string
  authors: string
  journal: string
  citation: string
  year: number
  doi: string
  kind: '研究论文' | '综述'
}

// Kai Wang is an author and Wenshan Li is a corresponding author for these papers.
export const publications: Publication[] = [
  {
    title: 'Rapid and Efficient Organic-Aqueous Two-Phase Extraction of High-Purity Semiconducting Single-Walled Carbon Nanotubes',
    authors: 'Rongbin Xie, Yingnan Yang, Xiao Lei, Kai Wang, Cheng Li, Wenshan Li',
    journal: 'Small', citation: '2026, e75843', year: 2026,
    doi: '10.1002/smll.75843', kind: '研究论文',
  },
  {
    title: 'Functional Carbon Nanotube Contacts for Silicon Photovoltaics: From Transparent Conductive Films to Selective and Passivating Interfaces',
    authors: 'Rongbin Xie, Jianze Xiao, Xiao Lei, Yingnan Yang, Xiyu Chao, Kai Wang, Wenshan Li',
    journal: 'ACS Applied Materials & Interfaces', citation: '2026, 18(36), 48678–48694', year: 2026,
    doi: '10.1021/acsami.6c13671', kind: '综述',
  },
  {
    title: 'High-density monolayer carbon nanotube arrays assembled via synergistic shear flow and dielectrophoresis',
    authors: 'Kai Wang, Yingnan Yang, Rongbin Xie, Jianze Xiao, Zhengming Hao, Xiao Lei, Chaoqun Li, Xu Zhou, Wenshan Li',
    journal: 'Nano Research', citation: '2026, 19(10), 94908879', year: 2026,
    doi: '10.26599/NR.2026.94908879', kind: '研究论文',
  },
  {
    title: 'A Strategy for Suppressing Bundling in Dielectrophoretically Assembled Carbon Nanotube Arrays',
    authors: 'Kai Wang, Rongbin Xie, Jianze Xiao, Yingnan Yang, Chaoqun Li, Zhengming Hao, Xiao Lei, Wenshan Li',
    journal: 'Nanomaterials', citation: '2026, 16(9), 512', year: 2026,
    doi: '10.3390/nano16090512', kind: '研究论文',
  },
  {
    title: 'A self-limiting dielectrophoretic strategy for monolayer carbon nanotube array assembly',
    authors: 'Kai Wang, Yingnan Yang, Zhengming Hao, Rongbin Xie, Wenshan Li',
    journal: 'Carbon', citation: '2026, 249, 121259', year: 2026,
    doi: '10.1016/j.carbon.2026.121259', kind: '研究论文',
  },
]
