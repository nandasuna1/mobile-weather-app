import { FlatList, TextInput } from 'react-native'
import React, { MutableRefObject, Ref, useRef, useState } from 'react'
import { DropdownBox, DropdownContent, List, ListComponent, SearchInput } from './styled'
import Text from '@atoms/Text'
import { Icon } from '@atoms/Icon'
import { Input } from '@atoms/Input'

export type DropdownComponentInterface = {
    value?: string | number | boolean,
    items?: item[],
    handleChande?:(value: string) => void,
    isDay?: 'dia' | 'noite',

}

type item = {
    label: string,
    value: string
}

export function DropdownComponent(Props: DropdownComponentInterface) {
    const [isClicked, setIsClicked] = useState(false)
    
    const initConfig = {
        value: Props?.value,
        data: Props?.items,
        search: '',
    }
    const [dropdownConfig, setDropdownConfig] = useState(initConfig)
    const {data, value} = dropdownConfig;
    
    const { handleChande = () => {}} = Props
    
    // const searchRef = useRef<TextInput>();

    const onSearch = (search: string) => {
        if (search !== '') {
        setDropdownConfig(prevState => {
            return {
                ...prevState,
                data: data?.filter(item => item?.value?.toLowerCase().indexOf(search.toLowerCase()) > -1)
            }
        })
        } else {
            setDropdownConfig(prevState => {
                return {
                    ...prevState,
                    data: Props?.items
                }
            })
        }
    };

    const handleOnPress = (value: string) => {        
        setDropdownConfig(prevState => {
            return {
                ...prevState,
                value,
                search: '',
                data: Props?.items
            }
        })
        setIsClicked(!isClicked);
        handleChande(value);
    }
    
  return (
      <DropdownBox>
        <DropdownContent onPress={() => setIsClicked(!isClicked)} testID='DropdownContent'>
            <Icon icon='location-pin' />
            <Text>{value}</Text>
            <Icon icon={ isClicked ? 'arrow-drop-up' :'arrow-drop-down'} size={30}/>
        </DropdownContent>
        {isClicked && 
            <List isDay={Props.isDay}>
                <Input 
                    placeholder='Procure sua cidade...' 
                    onChangeText={ txt => {
                        onSearch(txt)
                    }}
                    testID='DropdownInput'
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