import getRandomInt from "@/helpers/getRandomInt"


export const incrementRandonInt = async( {commit} ) =>{

    commit('setLoading',true)

    const randomInt = await getRandomInt()

    commit('incrementBy', randomInt)

    commit('setLoading',false)

}