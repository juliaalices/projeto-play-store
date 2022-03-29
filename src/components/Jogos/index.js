import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image } from "react-native"

export default function Jogos({ titulo, valor, imagem}){
    return (
        <TouchableOpacity style={estilo.containerJogos}>
            <Image
               style={estilo.images}
               source={require(`../../imagens/${imagem}`)}
        />

        <Text style={estilo.titulo}>{titulo}</Text>
        <Text style={estilo.valor}>{valor}</Text>
     </TouchableOpacity>
    );
}

const estilo = StyLesheet.create({
    containerJogos: {
        backgroundColor: "#DCDCDC" ,
        borderRadius: 10,
        marginTop: 8,
        padding: 10,
        margin: 2,
        alignItems: "center",
        justifyContent: "space-batween",
        width: 100,
        heignt: 150,
        marnLeft: 8,
    },
    titulo : {
        color: "black",
        fontSize: 12,
        fontWeight: "bold",

   },
   valor: {
       color:"black",
       fontSize:12,
       marginLeft: 29,
       marginTop: 2,
       fontWeight: "bold",
   },
   imagens: {
       width: "100%",
       height: 75,
       boderRadius: 3,
   },
});