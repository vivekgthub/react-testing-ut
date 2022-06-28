import * as React from 'react'
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';

describe('Tests for Todo App',()=>{
    // Write tests for Todo App
    // Add and  Delete Todo
    it('should work and render correct components for create and delete todo application', () => {
      render(<App/>);
      const todoinput = screen.getByPlaceholderText(/New Todo/i);
      userEvent.type(todoinput, 'add 1st todo');
      const createbtn = screen.getByRole('button', {name: /create/i});
      userEvent.click(createbtn);
      expect(screen.getByText(/add 1st todo/i)).toBeInTheDocument();   
      }),

    it('test case for delete todo', () => {
      render(<App/>);   
      const todoinput = screen.getByPlaceholderText(/New Todo/i);
      userEvent.type(todoinput, 'add 1st todo');
      const createbtn = screen.getByRole('button', {name: /create/i});
      userEvent.click(createbtn);
      expect(screen.getByText(/add 1st todo/i)).toBeInTheDocument();   
      const deletebtn = screen.getByRole('button', {name: /delete/i}); 
      userEvent.click(deletebtn);
      expect(screen.getByText(/0 todos/i)).toBeInTheDocument();
     
  })

})
