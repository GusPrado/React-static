import React, { Component } from 'react'

import PostItem from './PostItem'
//import Mickey from '../assets/mickey.png'

class PostList extends Component {
    state = {
      posts: [
        {
          id: 1,
          author: {
            name: "Mickey",
            avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Mickey-Rosto-Png.png"
          },
          date: "07 Nov 2019",
          content: "Hey guys!! \n Are you ready for Minnie's bday party? ",
          comments: [
            {
              id: 2,
              author: {
                name: "Pluto",
                avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Pluto-Rosto-Png.png"
              },
              content: "Can't wait on that"
            },
            {
                id: 3,
                author: {
                  name: "Goofy",
                  avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Pateta-Rosto-Png.png"
                },
                content: "Me too!! She will serve hotdogs?? #Delicious"  
            }
          ]
        },

        {
                    
            id: 4,
            author: {
                name: "Donald",
                avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Pato-Donald-Rosto-Png.png"
                     },
                date: "07 Nov 2019",
                content: "Indeed I was thinking about soccer at this time!! Who's in?",
                comments: [
                     {
                        id: 5,
                        author: {
                        name: "Miss Daisy",
                        avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Margarida-Rosto-Png.png"
                           },
                        content: "Were you thinking about what???"
                      },
                      {
                        id: 1,
                        author: {
                        name: "Mickey",
                        avatar: "https://imagensemoldes.com.br/wp-content/uploads/2018/03/Turma-do-Mickey-Mickey-Rosto-Png.png"
                      },
                      content: "LoL"
                      }
                ]                                                           
        }
      ]
    }

    render() {
        const { posts } = this.state;
        return (
            <div className="postlist">
                {posts.map(post => (<PostItem key={post.id} {...post} />            
                ))}
            </div>
        )
    }
}
  
  export default PostList;