import questions from './data/questions.json'
import domain from './data/domain.json'
import options from './data/options.json'
import conditions from './data/conditions.json'
import views from './data/views.json'
import tasks from './data/tasks.json'

export default {
  '/': {},
  '/questions': {
    title: 'Questions',
    keys: ['uri_prefix', 'comment',
           'title_en', 'title_de', 'title_fr',
           'text_en', 'text_de', 'text_fr'],
    filterKeys: ['uri'],
    elements: questions
  },
  '/domain': {
    title: 'Domain',
    keys: ['uri_prefix', 'comment',
           'parent'],
    filterKeys: ['uri'],
    elements: domain
  },
  '/options': {
    title: 'Options',
    keys: ['uri_prefix', 'comment', 'text_en', 'text_de', 'text_fr'],
    filterKeys: ['uri', 'comment', 'text_en', 'text_de', 'text_fr'],
    elements: options
  },
  '/conditions': {
    title: 'Conditions',
    keys: ['uri_prefix', 'comment'],
    filterKeys: ['uri'],
    elements: conditions
  },
  '/tasks': {
    title: 'Tasks',
    keys: ['uri_prefix', 'comment',
           'text_en', 'text_de', 'text_fr'],
    filterKeys: ['uri'],
    elements: tasks
  },
  '/views': {
    title: 'Views',
    keys: ['uri_prefix', 'comment',
           'title_en', 'title_de', 'title_fr'],
    filterKeys: ['uri'],
    elements: views
  }
}
