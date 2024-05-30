import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { parse } from 'node-html-parser';
import styles from './style';


const Operacao = () => {
  const [statusLinhas, setStatusLinhas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await axios.get('https://www.viaquatro.com.br/');
        const html = response.data;
        const root = parse(html);

        const LINES_METRO = ['azul', 'verde', 'vermelha', 'amarela', 'lilás', 'prata'];
        const LINES_CPTM = ['rubi', 'diamante', 'esmeralda', 'turquesa', 'coral', 'safira', 'jade'];
        const ALL_LINES = LINES_METRO.concat(LINES_CPTM);

        const extractedStatus = {};
        const statusColumn = root.querySelector('.operacao');

        // Linha amarela tem um container especial
        extractedStatus['amarela'] = statusColumn.querySelector('.status').text.trim();

        // Outras linhas
        const linesContainers = statusColumn.querySelectorAll('.linhas');

        linesContainers.forEach(container => {
          const lineInfoDivs = container.querySelectorAll('.info');
          lineInfoDivs.forEach(div => {
            const spans = div.querySelectorAll('span');
            const lineTitle = spans[0].text.trim().toLowerCase();
            const lineStatus = spans[1].text.trim().toLowerCase();
            extractedStatus[lineTitle] = lineStatus;
          });
        });

        setStatusLinhas(extractedStatus);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLoading(false);
      }
    };

    fetchStatus();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Status dos Trens e Metrôs</Text>
      {statusLinhas && Object.keys(statusLinhas).map(line => (
        <View key={line} style={styles.lineContainer}>
          <Text style={styles.line}>{line}</Text>
          <Text style={styles.status}>{statusLinhas[line]}</Text>
        </View>
      ))}
    </ScrollView>
  );
};



export default Operacao;