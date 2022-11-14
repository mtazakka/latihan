import React, { useEffect, useState } from 'react';
import { Alert, FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


const COLOUR = {
    primary: '#1f145c',
    white: '#fff'
}

const App = () => {
    const [textInput, setTextInput] = useState('')
    const [todos, setTodos] = useState([])

    const fetchData = () => {
        fetch('http://192.168.1.4:3000/todos')
            .then(async response => {
                const data = await response.json();
                if (!response.ok) {
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                setTodos(data.data);
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    useEffect(() => {
        fetchData();
    }, [])

    const ListItem = ({ todo }) => {
        return (
            <View style={styles.listItem}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: COLOUR.primary,
                        textDecorationLine: todo.complete ? 'line-through' : 'none'
                    }}>
                        {todo.title}
                    </Text>
                </View>
                {
                    !todo.completed && (
                        <TouchableOpacity style={[styles.actionIcon]} onPress={() => markTodoComplete(todo.id)}>
                            <MaterialIcons name="done" size={20} color={COLOUR.white} />
                        </TouchableOpacity>
                    )
                }
                <TouchableOpacity
                    style={[
                        styles.actionIcon,
                        { backgroundColor: 'red' }
                    ]}
                    onPress={() => deleteTodo(todo.id)}
                >
                    <MaterialIcons name="delete" size={20} color={COLOUR.white} />
                </TouchableOpacity>
            </View>
        )
    }

    const addTodo = () => {
        if (textInput == '') {
            Alert.alert('Error', 'Please input todo')
        } else {
            const newTodo = {
                id: Date.now(),
                task: textInput,
                completed: false
            }
            setTodos([...todos, newTodo])
            setTextInput('')
        }
    }

    const markTodoComplete = (todoId) => {
        const newTodos = todos.map(item => {
            if (item.id == todoId) {
                return { ...item, completed: true }
            }
            return item;
        })
        setTodos(newTodos)
    }
    const deleteTodo = (todoId) => {
        const newTodos = todos.filter(item => item.id != todoId)
        setTodos(newTodos)
    }

    const clearTodos = () => {
        Alert.alert('Confirm', 'Clear todos?', [
            {
                text: "Yes",
                onPress: () => setTodos([])
            },
            {
                text: "No"
            }
        ])
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLOUR.white }}>
            <View style={styles.header}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, color: COLOUR.primary }}>
                    Todo App
                </Text>
                <MaterialIcons name="delete" size={25} color="red" onPress={clearTodos} />
            </View>
            <FlatList
                data={todos}
                renderItem={({ item }) => <ListItem todo={item} />}
            />
            <View style={styles.footer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder='Add Todo'
                        value={textInput}
                        onChangeText={(text) => setTextInput(text)}
                    />
                </View>
                <TouchableOpacity onPress={addTodo}>
                    <View style={styles.iconContainer}>
                        <MaterialIcons name="add" size={30} color={COLOUR.white} />
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 20,
        backgroundColor: COLOUR.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10
    },
    actionIcon: {
        height: 25,
        width: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRadius: 3
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        color: COLOUR.white,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: COLOUR.white,
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20
    },
    iconContainer: {
        height: 50,
        width: 50,
        backgroundColor: COLOUR.primary,
        borderRadius: 25,
        elevation: 40,
        justifyContent: 'center',
        alignItems: "center"
    },
});

export default App;
