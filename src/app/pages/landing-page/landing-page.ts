import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage {
  title = 'WebPCD';
  whatsappLink = 'https://wa.me/5511999999999'; // Substituir pelo número real

  //  Informações sobre quem tem direito
  public rightsList = [
    'Pessoas com deficiência física (condutores ou não)',
    'Pessoas com deficiência visual',
    'Pessoas com deficiência mental (severa ou profunda)',
    'Autistas',
    'Pessoas com mobilidade reduzida ou doenças graves (ex: Câncer, AVC, Hérnia de Disco)'
  ];

  //  Passo a Passo
  public steps = [
    { number: 1, title: 'Laudo Médico', desc: 'Obtenção do laudo no padrão DETRAN.' },
    { number: 2, title: 'Isenção de IPI/ICMS', desc: 'Processo administrativo junto à Receita e Estado.' },
    { number: 3, title: 'Escolha do Veículo', desc: 'Seleção do carro com os parceiros WebPCD.' },
    { number: 4, title: 'Isenção de IPVA', desc: 'Solicitação final após a compra.' }
  ];

  //  Parceiros
  public partners = [
    { name: 'Despachante PCD Expert', type: 'Isenções', image: 'assets/partner1.jpg', tel: 'https://wa.me/5511999999999' },
    { name: 'Concessionária AutoMix', type: 'Venda de Veículos', image: 'assets/partner2.jpg', tel: 'https://wa.me/5561996472769' }
  ];

  //  Blog Simples
  public blogPosts = [
    { title: 'Mudanças no teto de isenção 2025', summary: 'Entenda os novos valores aprovados...' },
    { title: 'Quais doenças dão direito?', summary: 'Lista completa atualizada...' }
  ];

  public scrollTo(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
