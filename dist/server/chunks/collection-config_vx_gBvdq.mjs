let userCollections;
			try {
				userCollections = (await import('./content.config_CJ66__ds.mjs')).collections;
			} catch {}
			const collections = userCollections;

export { collections };
