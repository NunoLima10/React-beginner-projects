export const SeaPorts = [
    {
        islandName: "São Antão",
        seaPortName: "Porto Novo",
        lat: 17.017101,
        log: -25.059614,
        numberOfPier: 3,
        maxSeaDepth: 7,
        numberOfEquipments: 7
    },
    {
        islandName:"São Vicente" ,
        seaPortName: "Porto Grande",
        lat: 16.888771,
        log:-24.996327 ,
        numberOfPier:12 ,
        maxSeaDepth: 12,
        numberOfEquipments: 84
    },
    {
        islandName:"São Nicolau" ,
        seaPortName:"Porto do Tarrafal",
        lat: 16.567359,
        log: -24.359790,
        numberOfPier: 2,
        maxSeaDepth: 5,
        numberOfEquipments: 7
    },
    {
        islandName: "Sal",
        seaPortName: "Porto da Palmeira" ,
        lat: 16.753873,
        log: -22.983918,
        numberOfPier: 4,
        maxSeaDepth: 11.5,
        numberOfEquipments: 16
    },
    {
        islandName: "Boa Vista" ,
        seaPortName: "Porto Sal-Rei",
        lat: 16.178866,
        log: -22.926466,
        numberOfPier: 2,
        maxSeaDepth: 7,
        numberOfEquipments: 8
    },
    {
        islandName: "Maio" ,
        seaPortName: "Porto Inglês",
        lat: 15.139632,
        log: -23.220180,
        numberOfPier: 2,
        maxSeaDepth: 7,
        numberOfEquipments: 5
    },
    {
        islandName: "Santiago",
        seaPortName: "Porto da Praia",
        lat: 14.909754,
        log: -23.500536,
        numberOfPier: 9,
        maxSeaDepth: 13.5,
        numberOfEquipments: 64
    },
    {
        islandName: "Fogo" ,
        seaPortName: "Porto Vale Cavaleiros",
        lat: 14.919716,
        log: -24.503697,
        numberOfPier: 3,
        maxSeaDepth: 5,
        numberOfEquipments: 8
    },
    {
        islandName: "Brava" ,
        seaPortName: "Porto Furna",
        lat: 14.887554,
        log: -24.677909,
        numberOfPier: 2,
        maxSeaDepth: 5.5,
        numberOfEquipments: 6
    }
]

export function getSeaPortByIndex(index){
    return SeaPorts[index]
}