import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconAddSaldo, IconGetPoint } from '../../assets'

const ButtonIcon = ({ title }) => {

    const Icon = () => {
        if (title === 'Add Saldo') return <IconAddSaldo />
        if (title === 'Get Point') return <IconGetPoint />

        return <IconAddSaldo />
    }

    return (
        <TouchableOpacity>
            <Icon />
        </TouchableOpacity>
    )
}

export default ButtonIcon

const styles = StyleSheet.create({})