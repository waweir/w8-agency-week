--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.4
-- Dumped by pg_dump version 9.5.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: ar_internal_metadata; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE ar_internal_metadata (
    key character varying NOT NULL,
    value character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: carts; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE carts (
    id integer NOT NULL,
    token character varying,
    address character varying,
    email character varying,
    customer character varying,
    complete boolean,
    line_item_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: carts_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE carts_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: carts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE carts_id_seq OWNED BY carts.id;


--
-- Name: inventories; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE inventories (
    id integer NOT NULL,
    quantity integer,
    item_id integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: inventories_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE inventories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: inventories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE inventories_id_seq OWNED BY inventories.id;


--
-- Name: items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE items (
    id integer NOT NULL,
    sock_id integer,
    size character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE items_id_seq OWNED BY items.id;


--
-- Name: line_items; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE line_items (
    id integer NOT NULL,
    item_id integer,
    cart_id integer,
    quantity integer,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL
);


--
-- Name: line_items_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE line_items_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: line_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE line_items_id_seq OWNED BY line_items.id;


--
-- Name: refile_attachments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE refile_attachments (
    id integer NOT NULL,
    oid oid NOT NULL,
    namespace character varying NOT NULL,
    created_at timestamp without time zone DEFAULT ('now'::text)::timestamp without time zone
);


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE refile_attachments_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: refile_attachments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE refile_attachments_id_seq OWNED BY refile_attachments.id;


--
-- Name: schema_migrations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE schema_migrations (
    version character varying NOT NULL
);


--
-- Name: socks; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE socks (
    id integer NOT NULL,
    name character varying,
    primary_color character varying,
    style character varying,
    description text,
    price integer,
    material character varying,
    created_at timestamp without time zone NOT NULL,
    updated_at timestamp without time zone NOT NULL,
    category character varying,
    image_id character varying
);


--
-- Name: socks_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE socks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: socks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE socks_id_seq OWNED BY socks.id;


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY carts ALTER COLUMN id SET DEFAULT nextval('carts_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY inventories ALTER COLUMN id SET DEFAULT nextval('inventories_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY items ALTER COLUMN id SET DEFAULT nextval('items_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY line_items ALTER COLUMN id SET DEFAULT nextval('line_items_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments ALTER COLUMN id SET DEFAULT nextval('refile_attachments_id_seq'::regclass);


--
-- Name: id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks ALTER COLUMN id SET DEFAULT nextval('socks_id_seq'::regclass);


--
-- Name: ar_internal_metadata_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY ar_internal_metadata
    ADD CONSTRAINT ar_internal_metadata_pkey PRIMARY KEY (key);


--
-- Name: carts_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY carts
    ADD CONSTRAINT carts_pkey PRIMARY KEY (id);


--
-- Name: inventories_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY inventories
    ADD CONSTRAINT inventories_pkey PRIMARY KEY (id);


--
-- Name: items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY items
    ADD CONSTRAINT items_pkey PRIMARY KEY (id);


--
-- Name: line_items_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY line_items
    ADD CONSTRAINT line_items_pkey PRIMARY KEY (id);


--
-- Name: refile_attachments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY refile_attachments
    ADD CONSTRAINT refile_attachments_pkey PRIMARY KEY (id);


--
-- Name: schema_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY schema_migrations
    ADD CONSTRAINT schema_migrations_pkey PRIMARY KEY (version);


--
-- Name: socks_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY socks
    ADD CONSTRAINT socks_pkey PRIMARY KEY (id);


--
-- Name: index_carts_on_line_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_carts_on_line_item_id ON carts USING btree (line_item_id);


--
-- Name: index_inventories_on_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_inventories_on_item_id ON inventories USING btree (item_id);


--
-- Name: index_items_on_sock_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_items_on_sock_id ON items USING btree (sock_id);


--
-- Name: index_line_items_on_cart_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_line_items_on_cart_id ON line_items USING btree (cart_id);


--
-- Name: index_line_items_on_item_id; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_line_items_on_item_id ON line_items USING btree (item_id);


--
-- Name: index_refile_attachments_on_namespace; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_namespace ON refile_attachments USING btree (namespace);


--
-- Name: index_refile_attachments_on_oid; Type: INDEX; Schema: public; Owner: -
--

CREATE INDEX index_refile_attachments_on_oid ON refile_attachments USING btree (oid);


--
-- PostgreSQL database dump complete
--

SET search_path TO "$user", public;

INSERT INTO schema_migrations (version) VALUES ('20161114210821'), ('20161114223258'), ('20161114224727'), ('20161114225843'), ('20161115162702'), ('20161115190242'), ('20161115190340'), ('20161115190818'), ('20161115191228');


