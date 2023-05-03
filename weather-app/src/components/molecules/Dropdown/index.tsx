import { FlatList } from 'react-native'
import React, { Ref, useRef, useState } from 'react'
import { DropdownBox, DropdownContent, List, ListComponent, SearchInput } from './styled'
import Text from '@atoms/Text'
import { Icon } from '@atoms/Icon'

export type DropdownComponentInterface = {
    open?: boolean,
    value?: string | number | boolean,
    items?: item[],
    setOpen?: (open: boolean) => void,
    setValue?: () => void,
    setItems?: () => void,
    multiple?: string,
    cidade?: string,
    changeCity?:(city: string) => void,
    isDay?: 'dia' | 'noite',

}

type item = {
    label: string,
    value: string
}

export default function DropdownComponent(Props: DropdownComponentInterface) {
    const [search, setSearch] = useState('');
    const [cidade, setCidade] = useState(Props?.cidade)
    const [isClicked, setIsClicked] = useState(false)
    const [data, setData] = useState(Props?.items)
    const { changeCity = () => {} } = Props
    

    const searchRef = useRef();
    const onSearch = (search: string) => {
        if (search !== '') {
        let tempData = data?.filter(item => {
            return item?.value?.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
        setData(tempData);
        } else {
        setData(Props?.items);
        }
    };

    const handleOnPress = (value: string) => {        
        setCidade(value);
        setIsClicked(!isClicked);
        onSearch('');
        setSearch('');
        changeCity(value);
    }
    
  return (
      <DropdownBox>
        <DropdownContent onPress={() => {setIsClicked(!isClicked)}}>
            <Icon icon='location-pin' />
            <Text>{cidade}</Text>
            <Icon icon={ isClicked ? 'arrow-drop-up' :'arrow-drop-down'} size={30}/>
        </DropdownContent>
        {isClicked && 
            <List isDay={Props.isDay}>
                <SearchInput 
                    placeholder='Procure sua cidade...' 
                    onChangeText={ txt => {
                        onSearch(txt)
                    }}
                    ref={searchRef}
                    isDay={Props.isDay}
                />
                <FlatList 
                    data={data}
                    scrollEnabled={false}
                    renderItem={({item, index}) => {
                        return (
                            <ListComponent onPress={() => handleOnPress(item?.value)} >
                                <Text>{item?.label}</Text>
                            </ListComponent>
                        )
                    }}
                />
            </List>
        }
      </DropdownBox>

  )
}