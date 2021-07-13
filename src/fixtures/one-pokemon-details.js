// eslint-disable-next-line import/no-anonymous-default-export
export default {
        abilities: [
            {
                ability: {
                    name:"blaze",
                    url:"https://pokeapi.co/api/v2/ability/66/",
                }
            },
            {
                ability: {
                    name: "solar-power",
                    url: "https://pokeapi.co/api/v2/ability/94/",
                }
            }
        ],
        types: [
            {
              slot: 1,
              type: {
                name: "fire",
                url: "https://pokeapi.co/api/v2/type/10/"
              }
            },
            {
              slot: 2,
              type: {
                name: "flying",
                url: "https://pokeapi.co/api/v2/type/3/"
              }
            }
          ],
          sprites: {
            front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
          },
          order: 7,
          id: 6,
          moves: [
            {move: {name: "mega punch"}, version_group_details: Array(4)},
            {move: {name: "fire punch"}, version_group_details: Array(7)},
            {move: {name: "mega punch"}, version_group_details: Array(4)},
            {move: {name: "mega punch"}, version_group_details: Array(18)},
            {move: {name: "mega punch"}, version_group_details: Array(13)},
            {move: {name: "body-slam"}, version_group_details: Array(16)},
            {move: {name: "mega punch"}, version_group_details: Array(18)},
            {move: {name: "mega punch"}, version_group_details: Array(17)},
            {move: {name: "mega punch"}, version_group_details: Array(4)},
            {move: {name: "mega punch"}, version_group_details: Array(3)},
            {move: {name: "mega punch"}, version_group_details: Array(5)},
            {move: {name: "mega punch"}, version_group_details: Array(2)}
          ],
          stats: [
              {base_stat: 78, stat: {name: "hp"}},
              {base_stat: 84, stat: {name: "attack"}},
              {base_stat: 40, stat: {name: "defense"}},
              {base_stat: 109, stat: {name: "special-attack"}},
              {base_stat: 85, stat: {name: "special-defense"}},
              {base_stat: 100, stat: {name: "speed"}}
          ]
}