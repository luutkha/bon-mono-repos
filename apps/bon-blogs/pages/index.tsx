import classNames from 'classnames';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BlogCard from '../components/commons/blog-cards/BlogCard';
import { useAppDispatch } from '../redux/hooks';
import { setBgColor } from '../redux/slices/bg-color.slice';
import styles from '../styles/Home.module.css';
const { pageContainer, blogListContainerClass } = styles;

export const getStaticProps: GetStaticProps = async () => {
  const x = await fetch('https://jsonplaceholder.typicode.com/photos')
  const data = await x.json()
  console.log('this is sdata' + data)
  return {
    props: {
      listImages: data
    },
  }
}
const Home: NextPage = ({ listImages }: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(listImages)
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      setBgColor('#78b6fc')
    )

  }, [])
  return (
    <div className={classNames(pageContainer)}>
      <Container>
        <Row>
          <Col xl={12} style={{ backgroundColor: 'black', height: '300px', marginBottom: '20px' }}>
          </Col>
        </Row>
        <Row >
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN ' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>
          <Col xl={3} lg={4} md={6} sm={12}  >
            <BlogCard title='SUNK COST FALLACY - NGỤY BIỆN CHI PHÍ CHÌM, CHIẾC BẪY TÀNG HÌNH TỪ ĐẦU TƯ RA CUỘC SỐNG' imageUrl='https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' type='5 phút đọc' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate est distinctio architecto quis fuga ut eligendi mollitia expedita sed suscipit sunt, commodi necessitatibus non neque, laudantium, blanditiis aspernatur nam tempore.' />
          </Col>


        </Row>
      </Container>
    </div>
  )
}

export default Home

