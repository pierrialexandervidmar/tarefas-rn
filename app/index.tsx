import tarefasMock from '@/data/constants/tarefas';
import Tarefa from '@/data/model/Tarefa';
import { bgRed500, botao, flex1, flexRow, gapX5, gapY5, input, itemsCenter, lineThrough, mb10, px2, py1, textZinc500, w9_10 } from '@/styles';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function Index() {
  const [tarefas, setTarefas] = useState<Tarefa[]>(tarefasMock)
  const [descricao, setDescricao] = useState('')

  function adicionarTarefa() {
    if (descricao.trim() === '') return;
    const novaTarefa: Tarefa = { id: Math.random(), descricao, concluido: false }
    setTarefas([...tarefas, novaTarefa]);
    setDescricao('');
  }

  function alternarConclusao(tarefa: Tarefa) {
    const novaTarefa = { ...tarefa, concluido: !tarefa.concluido }
    const novasTarefas = tarefas.map((t) => t.id === tarefa.id ? novaTarefa : t)
    setTarefas(novasTarefas);
  }


  function excluirTarefa(tarefa: Tarefa) {
    const novasTarefas = tarefas.filter((t) => t.id !== tarefa.id)
    setTarefas(novasTarefas);
  }

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <View style={[flexRow, gapX5, w9_10, mb10]}>
        <TextInput
          value={descricao}
          onChangeText={setDescricao}
          style={[input, flex1]}
        />
        <Pressable style={[botao, px2]} onPress={adicionarTarefa}>
          <AntDesign name="plus" size={16} color="white" />
        </Pressable>

      </View>
      <View style={[w9_10, gapY5]}>
        {tarefas.map((tarefa) => (
          <View key={tarefa.id} style={[flexRow, itemsCenter, gapX5]}>
            <View style={flex1}>
              <Text style={tarefa.concluido ? [textZinc500, lineThrough] : []}>
                {tarefa.descricao}
              </Text>
            </View>
            <Pressable style={[botao, px2]} onPress={() => alternarConclusao(tarefa)}>
              <AntDesign name={tarefa.concluido ? 'eyeo' : 'eye'} size={16} color="white" />
            </Pressable>
            <Pressable style={[botao, bgRed500, px2]} onPress={() => excluirTarefa(tarefa)}>
              <AntDesign name="delete" size={16} color="white" />
            </Pressable>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}