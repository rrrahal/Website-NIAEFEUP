let keystone = require('keystone');
let Types = keystone.Field.Types;

/**
 * Candidato Model
 * ==========
 */
let Candidato = new keystone.List('Candidato', {
	label: 'Candidatos',
	path: 'candidatos',
	singular: 'Candidato',
	plural: 'Candidatos',
});

Candidato.add({
	name: { type: Types.Name, required: true },
	numero_up: { type: Types.Number, required: true, unique: true, initial: true },
	email: { type: Types.Email, required: true, unique: true, initial: true },
	curso: { type: String, required: true, initial: true },
	ano_curricular: { type: Types.Number, required: true, initial: true },
	porque_ni: { type: String, label: 'Porque o ni?', required: true, initial: true },
	linkedin: { type: Types.Url },
	github: { type: Types.Url },
	website: { type: Types.Url },
	tecnologias: { type: String },
	entrevistado: { type: Types.Boolean, default: false, initial: false },
	aceite: { type: Types.Boolean, default: false },
	fase_candidatura: { type: Types.Relationship, ref: 'FaseCandidatura', required: true, initial: true },
});

/**
 * Relationships
 */
Candidato.relationship({ path: 'respostas_candidatura', ref: 'RespostaCandidatura', refPath: 'candidato' });

/**
 * Registration
 */
Candidato.defaultColumns = 'name, email, porque_ni, entrevistado, aceite';
Candidato.register();
