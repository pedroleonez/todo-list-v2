# 📋 To-Do List

Uma aplicação **To-Do List** simples desenvolvida com **Java Spring Boot** no backend e **HTML, CSS e JavaScript** no frontend. Utiliza o banco de dados **H2** em memória para armazenamento das tarefas.

## 🎯 Funcionalidades

- ✅ **Adicionar Tarefas**: Crie novas tarefas rapidamente.
- 📋 **Listar Tarefas**: Visualize todas as tarefas cadastradas.
- ❌ **Excluir Tarefas**: Remova tarefas indesejadas.
- 📱 **Responsivo**: Interface otimizada para desktop e dispositivos móveis.

## 🛠️ Tecnologias Utilizadas

### Backend:
- **Java 21**
- **Spring Boot 3**
- **H2 Database**
- **JPA/Hibernate**
- **RESTful API**

### Frontend:
- **HTML5**
- **CSS3**
- **JavaScript (Fetch API)**

## 📂 Estrutura do Projeto

```
src/
  ├── main/
  │   ├── java/pedroleonez/todo-list-v2/
  │   │   ├── controller/
  │   │   │   └── TaskController.java
  │   │   ├── entity/
  │   │   │   └── Task.java
  │   │   ├── repository/
  │   │   │   └── TaskRepository.java
  │   │   └── service/
  │   │       └── TaskService.java
  │   └── resources/
  │       ├── static/
  │       │   ├── index.html
  │       │   ├── style.css
  │       │   └── script.js
  │       └── application.properties
```

## ⚙️ Configuração do Banco de Dados H2

A aplicação utiliza o banco de dados **H2 em memória**, configurado no arquivo `application.properties`:

```properties
spring.datasource.url=jdbc:h2:mem:todolist
spring.datasource.driver-class-name=org.h2.Driver
spring.datasource.username=sa
spring.datasource.password=
spring.h2.console.enabled=true
spring.jpa.show-sql=true
spring.jpa.hibernate.ddl-auto=update
```

### 🔗 Acesso ao Console H2

- **URL**: [http://localhost:8080/h2-console](http://localhost:8080/h2-console)  
- **JDBC URL**: `jdbc:h2:mem:todolist`  
- **Username**: `sa`  
- **Password**: (deixe em branco)

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/pedroleonez/todo-list-v2
   cd todo-list-v2
   ```

2. Compile e execute o projeto:
   ```bash
   ./mvnw spring-boot:run
   ```

3. Acesse a aplicação no navegador:
   ```
   http://localhost:8080
   ```

## 📱 Interface Responsiva

A interface foi projetada para funcionar perfeitamente em dispositivos desktop e móveis.

### Desktop:
![Desktop Screenshot](#) *()*

### Mobile:
![Mobile Screenshot](#) *()*

## 📝 Melhorias Futuras

- [ ] Implementar edição de tarefas.
- [ ] Adicionar sistema de filtro (tarefas concluídas e pendentes).
- [ ] Persistência das tarefas usando banco de dados externo (PostgreSQL).

## 📄 Licença

Este projeto está licenciado sob a **MIT License**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

📌 *Sinta-se à vontade para contribuir com melhorias!*

