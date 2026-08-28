import validarChamado from './validator';

describe('Suíte de Testes - Validador de Chamados (Service Desk)', () => {

    test('Deve validar com sucesso um chamado com título preenchido', () => {
        const resultado = validarChamado("Erro de conexão com o banco MySQL");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título do chamado for vazio', () => {
        expect(() => {
            validarChamado("");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título for composto apenas por espaços em branco', () => {
        expect(() => {
            validarChamado("   ");
        }).toThrow("O título do chamado não pode ser vazio.");
    });

    test('Deve lançar erro se o título tiver menos de 5 caracteres', () => {
        expect(() => {
            validarChamado("Erro");
        }).toThrow("O título do chamado deve possuir no mínimo 5 caracteres.");
    });

    test('Deve validar com sucesso um título com exatamente 5 caracteres', () => {
        const resultado = validarChamado("Teste");
        expect(resultado).toBe(true);
    });

    test('Deve lançar erro se o título tiver mais de 100 caracteres', () => {
        const titulo = "A".repeat(101);

        expect(() => {
            validarChamado(titulo);
        }).toThrow("O título do chamado deve possuir no máximo 100 caracteres.");
    });

    test('Deve validar com sucesso um título com exatamente 100 caracteres', () => {
        const titulo = "A".repeat(100);

        const resultado = validarChamado(titulo);

        expect(resultado).toBe(true);
    });
});