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
    keys: ['uri_prefix', 'key', 'comment',
           'title_en', 'title_de', 'title_fr', 'title_it',
           'text_en', 'text_de', 'text_fr', 'text_it'],
    elements: questions
  },
  '/domain': {
    title: 'Domain',
    keys: ['uri_prefix', 'key', 'comment'],
    elements: domain
  },
  '/options': {
    title: 'Options',
    keys: ['uri_prefix', 'key', 'comment', 'text_en', 'text_de', 'text_fr', 'text_it'],
    elements: options
  },
  '/conditions': {
    title: 'Conditions',
    keys: ['uri_prefix', 'key', 'comment', 'source', 'target_text', 'target_option'],
    elements: conditions
  },
  '/tasks': {
    title: 'Tasks',
    keys: ['uri_prefix', 'key', 'comment',
           'title_en', 'title_de', 'title_fr', 'title_it',
           'text_en', 'text_de', 'text_fr', 'text_it'],
    elements: tasks
  },
  '/views': {
    title: 'Views',
    keys: ['uri_prefix', 'key', 'comment',
           'title_en', 'title_de', 'title_fr', 'title_it',
           'help_en', 'help_de', 'help_fr', 'help_it'],
    elements: views
  }
}
