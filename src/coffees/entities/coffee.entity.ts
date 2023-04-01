<<<<<<< HEAD
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
=======
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Flavor } from './flavor.entity';

@Entity() // sql table === 'coffee'
>>>>>>> e0f39d8dad6cbc86f20e3d3a694c9253c48152a7
export class Coffee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

<<<<<<< HEAD
  @Column('json', { nullable: true })
  flavors: string[];
=======
  @Column({ nullable: true })
  description: string;

  @Column({ default: 0 })
  recommendations: number;

  @JoinTable()
  @ManyToMany((type) => Flavor, (flavor) => flavor.coffees, {
    cascade: true,
  })
  flavors: Flavor[];
>>>>>>> e0f39d8dad6cbc86f20e3d3a694c9253c48152a7
}
