import { useState } from 'react';
import Header from '../../components/Header/header'
import './Home.css'

import mainImg from '../../assets/main-img.jpg'
import Card from '../../components/Card/Card';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export const adoptions = [
    {
      id: "1",
      nome: "Max",
      raca: "Labrador Retriever",
      tipo:"cachorro",
      idade: 3,
      legenda: "Um amigo brincalhão em busca de um lar amoroso!",
      descricao: "Max é um labrador retriever muito energético e adora brincar de buscar a bolinha. Ele é extremamente amigável com crianças e outros animais. Está castrado e vacinado.",
      localizacao: "São Paulo, SP",
      url: "https://static4.depositphotos.com/1000149/377/i/600/depositphotos_3773753-stock-photo-black-labrador-retriever-in-green.jpg"
    },
    {
      id: "2",
      nome: "Luna",
      raca: "Persa",
      tipo:"gato",
      idade: 2,
      legenda: "Uma gatinha calma e amorosa procurando um cantinho para chamar de lar.",
      descricao: "Luna é uma gatinha persa de pelagem fofinha e olhos expressivos. Ela é tranquila, adora receber carinho e se dá bem com outros gatos. Já foi esterilizada e está com todas as vacinas em dia.",
      localizacao: "Rio de Janeiro, RJ",
      url: "https://i1.wp.com/www.dci.com.br/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/09/Design-sem-nome-8-1024x683.jpg.webp"
    },
    {
      id: "3",
      nome: "Charlie",
      raca: "Vira-lata",
      tipo:"cachorro",
      idade: 1,
      legenda: "Alegria e diversão em um pacote de pelos!",
      descricao: "Charlie é um vira-lata super brincalhão e cheio de energia. Ele adora correr e brincar ao ar livre, é um companheiro perfeito para quem gosta de atividades ao ar livre. Está castrado e com todas as vacinas atualizadas.",
      localizacao: "Belo Horizonte, MG",
      url: "https://random.dog/10fa025a-b04a-47d7-bfed-98747269b6c2.jpg"
    },
    {
      id: "4",
      nome: "Bella",
      raca: "Golden Retriever",
      tipo:"cachorro",
      idade: 4,
      legenda: "Uma cadelinha doce em busca de uma família amorosa.",
      descricao: "Bella é uma golden retriever muito carinhosa e leal. Ela adora fazer longas caminhadas e é extremamente amigável com crianças. Já foi castrada e está com todas as vacinas em dia.",
      localizacao: "Porto Alegre, RS",
      url: "https://t1.ea.ltmcdn.com/pt/posts/8/9/4/cuidados_com_o_pelo_do_golden_retriever_20498_600_square.jpg"
    },
    {
      id: "5",
      nome: "Simba",
      raca: "Maine Coon",
      tipo:"gato",
      idade: 2,
      legenda: "Um gato majestoso procurando um palácio para chamar de seu.",
      descricao: "Simba é um gato da raça Maine Coon com pelagem exuberante. Ele é independente, mas adora receber atenção e carinho. É acostumado com outros animais e está castrado e vacinado.",
      localizacao: "Curitiba, PR",
      url: "https://royalpets.vteximg.com.br/arquivos/ids/177844/maine-coon-500-500-2.jpg?v=637534890770670000"
    },
    {
      id: "6",
      nome: "Thor",
      raca: "Bulldog Francês",
      tipo:"cachorro",
      idade: 2,
      legenda: "Um cãozinho cheio de personalidade procurando um lar amoroso.",
      descricao: "Thor é um bulldog francês muito brincalhão e adora estar perto de pessoas. Ele é sociável com outros animais e tem todas as vacinas em dia. Está castrado e pronto para ser adotado.",
      localizacao: "Recife, PE",
      url: "https://images.tcdn.com.br/img/img_prod/629332/roupa_para_buldogue_frances_hello_pets_2615_1_20200227191707.jpg"
    },
    {
      id: "7",
      nome: "Lola",
      raca: "Shih Tzu",
      tipo:"cachorro",
      idade: 5,
      legenda: "Uma cadelinha fofa e amorosa procurando um lar tranquilo.",
      descricao: "Lola é uma shih tzu muito meiga e adora receber carinho. Ela é calma e se dá bem com crianças e outros animais. Já foi esterilizada e está com todas as vacinas atualizadas.",
      localizacao: "Brasília, DF",
      url: "https://i0.wp.com/mundoshihtzus.com/wp-content/uploads/2021/12/Design-sem-nome-65.png?fit=1200%2C675&ssl=1"
    },
    {
      id: "8",
      nome: "Maximus",
      raca: "Husky Siberiano",
      tipo:"cachorro",
      idade: 3,
      legenda: "Um companheiro fiel e cheio de energia!",
      descricao: "Maximus é um husky siberiano muito ativo e brincalhão. Ele precisa de bastante espaço para correr e se exercitar. É sociável com outros cães, mas requer cuidados especiais. Está castrado e com todas as vacinas em dia.",
      localizacao: "Salvador, BA",
      url: "https://random.dog/a82dc0e2-29e0-4007-845b-f0160a4f7295.jpg"
    },
    {
      id: "9",
      nome: "Mia",
      raca: "Siamês",
      tipo:"gato",
      idade: 1,
      legenda: "Uma gata curiosa em busca de um lar cheio de amor.",
      descricao: "Mia é uma gata siamesa de personalidade cativante. Ela adora explorar e está sempre pronta para uma brincadeira. É sociável com outros animais e já foi esterilizada e vacinada.",
      localizacao: "Fortaleza, CE",
      url: "https://image.cachorrogato.com.br/textimages/gato-siames-raca.jpg"
    },
    {
      id: "10",
      nome: "Toby",
      raca: "Labrador Retriever",
      tipo:"cachorro",
      idade: 2,
      legenda: "Um amigo fiel e leal pronto para fazer parte da sua família.",
      descricao: "Toby é um labrador retriever muito inteligente e brincalhão. Ele adora brincar de buscar a bolinha e está sempre pronto para um passeio. É extremamente amigável com crianças e outros animais. Está castrado e com todas as vacinas em dia.",
      localizacao: "Manaus, AM",
      url: "https://www.marthastewart.com/thmb/gCXKR-31DYnpsLi7uUj0S4zyfqc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/happy-labrador-retriever-getty-0322-2000-eb585d9e672e47da8b1b7e9d3215a5cb.jpg"
    }
];
export default function Home() {
    const [listaAnimais, setListaAnimais] = useState(adoptions)
    const [ filtro, setFiltro ] = useState('all')


    function handleFilter(valorFiltro) {
        setListaAnimais(adoptions)
        setFiltro(valorFiltro)

        switch (valorFiltro) {
            case "all":
                setListaAnimais(adoptions)
                break;
            case "cachorro":
                var listaAnimaisCopy = adoptions.filter((item) => item.tipo === "cachorro") 
                setListaAnimais(listaAnimaisCopy)
                break;
            case "gato":
                var listaAnimaisCopy2 = adoptions.filter((item) => item.tipo === "gato") 
                setListaAnimais(listaAnimaisCopy2)
                break
            default:
                break;
        }
    }

    return (
    <>
        <div className='container' >
            <Header />
            <div className='content'>
                <div className='content-head'>
                    <h1 className='page-title'>Todo pet merece um lar amoroso. <span style={{color: '#6f42c1'}}>Adote</span> um pet hoje</h1>
                    <p>Navegue pelos nossos animais disponíveis e saiba mais sobre o processo de adoção. Obrigado por apoiar nossa missão de levar alegria às famílias por meio da adoção de animais de estimação.</p>
                </div>
                    <img alt='foto cachorro' className='main-img' src={mainImg} />
            </div>

            <div className='filterWrapper'>
                <span>Filtrar por</span>
                <select value={filtro} onChange={(val) => handleFilter(val.target.value)}>
                    <option label='todos' value="all" />
                    <option label='Cachorro' value="cachorro" />
                    <option label='Gato' value="gato" />
                </select>
            </div>

            <div href='#lista' className='CardsWrapper'>
                {listaAnimais.map((item) => 
                  <Link style={{textDecoration: "none"}} to={`/details/${item.id}`}>
                    <Card item={item} />
                  </Link>
                )}
            </div>

        </div>
        <Footer />
    </>
    )
}