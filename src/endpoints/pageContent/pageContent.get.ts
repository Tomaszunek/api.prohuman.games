import { Request, Response } from 'express'
import { NewsDao, ProductsDao, ProjectDao } from '../../dao/_index'

export function mainPageContent(req: Request, res: Response) {
  const news = NewsDao.findAllMainPage();
  const products = ProductsDao.findAllMainPage();
  const projects = ProjectDao.findAllMainPage();
  return Promise.all([news, products, projects])
    .then(resp => {
      const response = {
        items: resp[0],
        promotedItems: resp[1],
        slides: resp[2]
      }
      return res.json({ result: response })
    })
    .catch(error => res.boom.badRequest(error))
}

