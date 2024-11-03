import tarefasMock from '@/data/constants/tarefas';
import Tarefa from '@/data/model/Tarefa';
import { bgBlue500, bgRed500, botao, flex1, flexRow, gap5, itemsCenter, lineThrough, px2, textZinc500 } from '@/styles';
import { useState } from 'react';
import { Pressable, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Index() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)


  function alternarConclusao(tarefa: Tarefa) {
    const novaTarefa = {...tarefa, concluido:!tarefa.concluido }
    const novasTarefas = tarefas.map((t) => t.id === tarefa.id? novaTarefa : t)
    setTarefas(novasTarefas);
  }


  function excluirTarefa(tarefa: Tarefa) {
    const novasTarefas = tarefas.filter((t) => t.id !== tarefa.id)
    setTarefas(novasTarefas);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tarefas.map((tarefa) => (
        <View key={tarefa.id} style={[flexRow, itemsCenter, gap5]}>
          <View style={flex1}>
            <Text style={tarefa.concluido ? [textZinc500, lineThrough] : []}>
              {tarefa.descricao}
            </Text>
          </View>
          <Pressable style={[botao, px2]} onPress={() => alternarConclusao(tarefa)}>
            <AntDesign name={tarefa.concluido ? 'eyeo' : 'eye'} size={16} color="white" />
          </Pressable>
          <Pressable style={[botao, bgRed500, px2]} onPress={() => excluirTarefa(tarefa)}>
            <AntDesign name="delete" size={18} color="white" />
          </Pressable>
        </View>
      ))}
    </View>
  );
}