import { HeroBg, Slogan, Title, ContentSearch, SearchField, SearchInput, SearchOptionField, SelectField } from './style'
import{ FaSearch, FaMapMarker } from 'react-icons/fa'
import { Option } from '../Option/Option'
import { useEffect, useState } from 'react'
import { Button } from '../Button/Button'


export function Header() {
const [citys, setCitys] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/distritos?orderBy=nome');
      const data = await response.json();
      const cityNames = data.map(city => city.nome);
      setCitys(cityNames);
    };
    fetchData();
  }, []);


    
    return(
        <HeroBg>
            <Slogan>FIND YOUR BLOCK</Slogan>
            <Title>Encontre os <span>&nbsp;melhores blocos&nbsp;</span> de carnaval de 2023</Title>
            <ContentSearch>
                <SearchField>
                    <FaSearch color='#E45858'/>
                    <SearchInput type='text' placeholder='Pesquise por um nome' />
                </SearchField>
                <SearchOptionField>
                    <FaMapMarker color='#E45858' />
                    <SelectField>
                    {citys.map(city => (
                        <Option key={city} name={city} />
                    ))}
                    </SelectField>
                </SearchOptionField>
                <Button width="169px" height="48px" text="Buscar agora"/>
            </ContentSearch>
        </HeroBg>
    )
}