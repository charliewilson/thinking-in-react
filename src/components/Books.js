import React from 'react'

import BookList from './BookList'
import BookFilter from './BookFilter'
import SectionTitle from './SectionTitle'

import books from '../mocks/books'

class Books extends React.Component {

    constructor() {
        super()
        this.state = {
            books: books,
            selectedFilter: 'All',
        }
    }

    selectFilter = filter => {
        this.setState({
          selectedFilter: filter,
          books:
            filter === 'All'
              ? books
              : books.filter(book => book.category === filter)
        })
      }

    render() {

        const filters = ['All', 'Design', 'Mobile', 'DevOps', 'Essentials']

        const tabItems = filters.map(filter => (
        <li
            className={filter === this.state.selectedFilter ? 'active' : ''}
            key={filter}
            onClick={() => this.selectFilter(filter)}
        >
            <a href="#0">{filter}</a>
        </li>
        ))

        return (
        <section id="books">
          <div className="container">
            <SectionTitle
              title="Books"
              starclass="star-primary"
            />
            <BookFilter tabs={tabItems} />
            <BookList books={this.state.books} />
          </div>
        </section>
        )

    }

}

export default Books