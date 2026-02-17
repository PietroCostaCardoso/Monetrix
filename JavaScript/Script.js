/* Monetrix
 * @author: Pietro Costa Cardoso
 * @link: https://github.com/PietroCostaCardoso
 * Copyright (c) 2026. Todos os direitos reservados.
 * Este código está licenciado sob a MIT License.
 * O plágio ou remoção deste cabeçalho é estritamente proibido.
 */

document.addEventListener('DOMContentLoaded', function() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    
    let navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarToggler) {
        const targetId = navbarToggler.getAttribute('data-bs-target') || navbarToggler.getAttribute('href');
        if (targetId && targetId !== '#' && document.querySelector(targetId)) {
            navbarCollapse = document.querySelector(targetId);
        }
    }

    if (navbarToggler && navbarCollapse) {
        navbarToggler.removeAttribute('data-bs-toggle');

        navbarToggler.addEventListener('click', function(e) {
            e.preventDefault();

            if (typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
                const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
                bsCollapse.toggle();
            } else {
                navbarCollapse.classList.toggle('show');
            }
        });
    }
});

/* tradução*/ 
const translations = {
    pt: {
        nav_home: "Home",
        nav_features: "Recursos",
        nav_benefits: "Benefícios",
        nav_pricing: "Preços",
        nav_login: "Entrar",
        hero_title: "Gestão financeira simples e eficiente",
        hero_subtitle: "Mais de 1 milhão de pessoas já confiam no Monetrix, a plataforma online que transforma a gestão das suas finanças em algo prático e seguro.",
        hero_cta: "Comece agora",
        hero_available: "Disponível para:",
        footer_brand: "Monetrix",
        footer_text: "Suas contas, descomplicadas.",
        footer_links: "Links úteis",
        nav_contact: "Contato",
        footer_email: "Email: contato@monetrix.com.br",
        footer_phone: "Telefone: (11) 99999-9999",
        footer_copy: "&copy; 2026 Monetrix",
        features_badge: "INOVAÇÃO",
        features_title: "O banco digital que <span class=\"text-primary\">cresce com você</span>",
        features_lead: "Segurança e praticidade em um só lugar.",
        features_text: "Oferecemos soluções financeiras modernas para pessoas e empresas. Com tecnologia avançada e suporte dedicado, garantimos que seu dinheiro esteja sempre protegido e trabalhando a seu favor.",
        features_btn: "Veja mais <i class=\"fas fa-arrow-right ms-2\"></i>",
        why_title: "Por que escolher o Monetrix ?",
        why_item_1: "Segurança garantida com criptografia avançada",
        why_item_2: "Controle total dos seus gastos em tempo real",
        why_item_3: "Suporte humano 24h por dia",
        why_item_4: "Interface simples e intuitiva",
        why_stat_1: "Clientes satisfeitos",
        why_stat_2: "Mais economia",
        why_btn: "Veja mais",
        benefits_card1_title: "Fácil de usar",
        benefits_card1_text: "O Monetrix vai além do básico e permite que você faça controles incríveis, essenciais para suas finanças. Simples como tem que ser!",
        benefits_card2_title: "Economize seu tempo",
        benefits_card2_text: "Tempo é dinheiro! Em segundos, você tem tudo sob controle e aproveite seu tempo com o que realmente importa pra você!",
        benefits_card3_title: "Suporte amigo",
        benefits_card3_text: "Dúvidas? Perguntas? Nosso suporte super legal ajuda você! A gente tá aqui pra resolver seus problemas e deixar sua vida bem mais fácil!",
        pricing_title: "Escolha seu plano",
        pricing_subtitle: "Encontre a opção perfeita para o seu bolso.",
        pricing_month: "/mês",
        pricing_btn: "Assine já",
        pricing_popular: "Mais Popular",
        plan1_title: "Essencial",
        plan1_item1: "Cartão de débito",
        plan1_item2: "Saques limitados",
        plan1_item3: "Transferências via PIX ilimitadas",
        plan1_item4: "Sem cartão de crédito",
        plan1_item5: "Atendimento digital",
        plan2_title: "Conta Premium",
        plan2_item1: "Cartão de débito e crédito",
        plan2_item2: "Saques ilimitados",
        plan2_item3: "Transferências via PIX e TED/DOC",
        plan2_item4: "Programa de pontos ou cashback",
        plan2_item5: "Atendimento digital + suporte telefônico",
        plan3_title: "Conta Gold",
        plan3_item1: "Cartão de débito e crédito internacional",
        plan3_item2: "Saques ilimitados em qualquer banco",
        plan3_item3: "Transferências PIX, TED/DOC ilimitadas",
        plan3_item4: "Programa de pontos + milhas aéreas",
        plan3_item5: "Atendimento prioritário (agência e digital)",
        plan3_item6: "Consultoria financeira personalizada"
    },
    en: {
        nav_home: "Home",
        nav_features: "Features",
        nav_benefits: "Benefits",
        nav_pricing: "Pricing",
        nav_login: "Login",
        hero_title: "Simple and efficient financial management",
        hero_subtitle: "Over 1 million people trust Monetrix, the online platform that transforms your financial management into something practical and secure.",
        hero_cta: "Start now",
        hero_available: "Available for:",
        footer_brand: "Monetrix",
        footer_text: "Your bills, uncomplicated.",
        footer_links: "Useful Links",
        nav_contact: "Contact",
        footer_email: "Email: contact@monetrix.com.br",
        footer_phone: "Phone: (11) 99999-9999",
        footer_copy: "&copy; 2026 Monetrix",
        features_badge: "INNOVATION",
        features_title: "The digital bank that <span class=\"text-primary\">grows with you</span>",
        features_lead: "Security and practicality in one place.",
        features_text: "We offer modern financial solutions for people and companies. With advanced technology and dedicated support, we ensure your money is always protected and working for you.",
        features_btn: "See more <i class=\"fas fa-arrow-right ms-2\"></i>",
        why_title: "Why choose Monetrix?",
        why_item_1: "Guaranteed security with advanced encryption",
        why_item_2: "Total control of your expenses in real time",
        why_item_3: "24/7 human support",
        why_item_4: "Simple and intuitive interface",
        why_stat_1: "Satisfied customers",
        why_stat_2: "More savings",
        why_btn: "See more",
        benefits_card1_title: "Easy to use",
        benefits_card1_text: "Monetrix goes beyond the basics and allows you to make incredible controls, essential for your finances. Simple as it should be!",
        benefits_card2_title: "Save your time",
        benefits_card2_text: "Time is money! In seconds, you have everything under control and enjoy your time with what really matters to you!",
        benefits_card3_title: "Friendly support",
        benefits_card3_text: "Doubts? Questions? Our super cool support helps you! We are here to solve your problems and make your life much easier!",
        pricing_title: "Choose your plan",
        pricing_subtitle: "Find the perfect option for your pocket.",
        pricing_month: "/month",
        pricing_btn: "Subscribe now",
        pricing_popular: "Most Popular",
        plan1_title: "Essential",
        plan1_item1: "Debit card",
        plan1_item2: "Limited withdrawals",
        plan1_item3: "Unlimited PIX transfers",
        plan1_item4: "No credit card",
        plan1_item5: "Digital support",
        plan2_title: "Premium Account",
        plan2_item1: "Debit and credit card",
        plan2_item2: "Unlimited withdrawals",
        plan2_item3: "Transfers via PIX and TED/DOC",
        plan2_item4: "Points program or cashback",
        plan2_item5: "Digital support + phone support",
        plan3_title: "Gold Account",
        plan3_item1: "International debit and credit card",
        plan3_item2: "Unlimited withdrawals at any bank",
        plan3_item3: "Unlimited PIX, TED/DOC transfers",
        plan3_item4: "Points program + air miles",
        plan3_item5: "Priority support (agency and digital)",
        plan3_item6: "Personalized financial consulting"
    }
};

let currentLang = 'pt';

function updateLanguage() {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    
    const btn = document.getElementById('language-toggle');
    if(btn) {
        btn.textContent = currentLang === 'pt' ? 'EN' : 'PT';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('language-toggle');
    if(btn) {
        btn.addEventListener('click', () => {
            currentLang = currentLang === 'pt' ? 'en' : 'pt';
            updateLanguage();
        });
    }
});
