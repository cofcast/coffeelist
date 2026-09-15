import { a as require_react, o as __toESM, t as require_jsx_runtime } from "../index.js";
//#region app/page.tsx
var import_react = /* @__PURE__ */ __toESM(require_react(), 1);
var import_jsx_runtime = require_jsx_runtime();
var seedLogs = [
	{
		id: 1,
		name: "에티오피아 첼베사",
		roastery: "센터 커피",
		origin: "Ethiopia · Gedeb",
		method: "핸드드립",
		rating: 4.8,
		date: "2026-09-15",
		note: "재스민 향이 선명하고, 식으면서 복숭아와 홍차 같은 단맛이 오래 남았다.",
		tags: [
			"재스민",
			"복숭아",
			"홍차"
		]
	},
	{
		id: 2,
		name: "콜롬비아 엘 파라이소",
		roastery: "프릳츠",
		origin: "Colombia · Cauca",
		method: "라떼",
		rating: 4.5,
		date: "2026-09-13",
		note: "우유와 함께 마시니 캐러멜의 단맛과 고소한 여운이 더 또렷했다.",
		tags: [
			"캐러멜",
			"아몬드",
			"밀크초콜릿"
		]
	},
	{
		id: 3,
		name: "케냐 키암부 AA",
		roastery: "테라로사",
		origin: "Kenya · Kiambu",
		method: "아메리카노",
		rating: 4.2,
		date: "2026-09-10",
		note: "블랙커런트 같은 산미와 묵직한 단맛. 얼음을 조금 녹였을 때 균형이 좋았다.",
		tags: [
			"블랙커런트",
			"자몽",
			"흑설탕"
		]
	},
	{
		id: 4,
		name: "과테말라 엘 인헤르토",
		roastery: "커피 리브레",
		origin: "Guatemala · Huehuetenango",
		method: "콜드브루",
		rating: 3.9,
		date: "2026-09-06",
		note: "초콜릿과 견과류의 편안한 인상. 산미가 적어 늦은 오후에 마시기 좋았다.",
		tags: [
			"카카오",
			"호두",
			"흑설탕"
		]
	}
];
var methods = [
	"전체",
	"핸드드립",
	"에스프레소",
	"아메리카노",
	"라떼",
	"콜드브루"
];
var emptyForm = {
	name: "",
	roastery: "",
	origin: "",
	method: "핸드드립",
	rating: "4.5",
	date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
	note: "",
	tags: ""
};
function formatDate(value) {
	const date = /* @__PURE__ */ new Date(`${value}T00:00:00`);
	return new Intl.DateTimeFormat("ko-KR", {
		month: "long",
		day: "numeric",
		weekday: "short"
	}).format(date);
}
function Home() {
	const [logs, setLogs] = (0, import_react.useState)(seedLogs);
	const [query, setQuery] = (0, import_react.useState)("");
	const [method, setMethod] = (0, import_react.useState)("전체");
	const [isModalOpen, setIsModalOpen] = (0, import_react.useState)(false);
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const saved = window.localStorage.getItem("drip-log-coffees");
		if (saved) try {
			setLogs(JSON.parse(saved));
		} catch {
			setLogs(seedLogs);
		}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (hydrated) window.localStorage.setItem("drip-log-coffees", JSON.stringify(logs));
	}, [logs, hydrated]);
	(0, import_react.useEffect)(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") setIsModalOpen(false);
		};
		window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, []);
	const filteredLogs = (0, import_react.useMemo)(() => {
		const keyword = query.trim().toLowerCase();
		return logs.filter((log) => {
			const methodMatches = method === "전체" || log.method === method;
			const text = [
				log.name,
				log.roastery,
				log.origin,
				log.note,
				...log.tags
			].join(" ").toLowerCase();
			return methodMatches && (!keyword || text.includes(keyword));
		});
	}, [
		logs,
		method,
		query
	]);
	const averageRating = logs.length ? (logs.reduce((sum, log) => sum + log.rating, 0) / logs.length).toFixed(1) : "0.0";
	const favoriteMethod = (0, import_react.useMemo)(() => {
		if (!logs.length) return "—";
		const counts = logs.reduce((acc, log) => {
			acc[log.method] = (acc[log.method] || 0) + 1;
			return acc;
		}, {});
		return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
	}, [logs]);
	const submitLog = (event) => {
		event.preventDefault();
		const nextLog = {
			id: Date.now(),
			name: form.name.trim(),
			roastery: form.roastery.trim(),
			origin: form.origin.trim() || "원산지 미기록",
			method: form.method,
			rating: Number(form.rating),
			date: form.date,
			note: form.note.trim() || "아직 남긴 메모가 없어요.",
			tags: form.tags.split(",").map((tag) => tag.trim()).filter(Boolean).slice(0, 4)
		};
		setLogs((current) => [nextLog, ...current]);
		setForm({
			...emptyForm,
			date: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10)
		});
		setIsModalOpen(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "site-header",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				className: "brand",
				href: "#top",
				"aria-label": "드립로그 홈",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "brand-mark",
					"aria-hidden": "true",
					children: "D"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DRIP.LOG" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "header-actions",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "today",
					children: "SEP · 2026"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "primary-button",
					type: "button",
					onClick: () => setIsModalOpen(true),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						"aria-hidden": "true",
						children: "＋"
					}), " 새 기록"]
				})]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "hero",
			id: "top",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "COFFEE JOURNAL · VOL. 09"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", { children: [
				"오늘의 커피를",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
				"기억하는 가장 단순한 방법."
			] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hero-copy",
				children: [
					"한 잔의 향과 온도, 그날의 기분까지.",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
					"마셨던 커피를 천천히 기록해보세요."
				]
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "stats",
			"aria-label": "커피 기록 요약",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stat-item",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label",
							children: "TOTAL CUPS"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: String(logs.length).padStart(2, "0") }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-unit",
							children: "잔의 기록"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stat-item",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label",
							children: "AVG. RATING"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: averageRating }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-unit",
							children: "평균 평점"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "stat-item method-stat",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label",
							children: "MOST BREWED"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: favoriteMethod }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-unit",
							children: "가장 자주 마신 방식"
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "journal-section",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "section-heading",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "MY JOURNAL"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "최근 기록" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [filteredLogs.length, "개의 커피"] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "toolbar",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "search-box",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "커피 기록 검색"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"aria-hidden": "true",
								children: "⌕"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "search",
								value: query,
								onChange: (event) => setQuery(event.target.value),
								placeholder: "원두, 로스터리, 향미 검색"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "filter-list",
						"aria-label": "추출 방식 필터",
						children: methods.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: method === item ? "filter active" : "filter",
							type: "button",
							onClick: () => setMethod(item),
							children: item
						}, item))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "coffee-list",
					children: [filteredLogs.map((log, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "coffee-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "card-number",
								children: String(index + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-main",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "card-topline",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatDate(log.date) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "method-badge",
											children: log.method
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: log.name }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "roastery",
										children: [
											log.roastery,
											" ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "·" }),
											" ",
											log.origin
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "tasting-note",
										children: [
											"“",
											log.note,
											"”"
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "tags",
										children: log.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["#", tag] }, tag))
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "card-rating",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rating-label",
										children: "RATING"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: log.rating.toFixed(1) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rating-scale",
										children: "/ 5.0"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										className: "delete-button",
										type: "button",
										onClick: () => setLogs((current) => current.filter((item) => item.id !== log.id)),
										"aria-label": `${log.name} 기록 삭제`,
										children: "삭제"
									})
								]
							})
						]
					}, log.id)), !filteredLogs.length && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "empty-state",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NO RECORDS" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: "조건에 맞는 기록이 없어요." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "검색어를 바꾸거나 새로운 커피를 기록해보세요." }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-button",
								type: "button",
								onClick: () => setIsModalOpen(true),
								children: "첫 기록 남기기 →"
							})
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "DRIP.LOG" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "좋았던 한 잔을 오래 기억하기 위해." }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "EST. 2026" })
		] }),
		isModalOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "modal-backdrop",
			role: "presentation",
			onMouseDown: () => setIsModalOpen(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "modal",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "modal-title",
				onMouseDown: (event) => event.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "modal-header",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "NEW CUP"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						id: "modal-title",
						children: "새 커피 기록"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "close-button",
						type: "button",
						onClick: () => setIsModalOpen(false),
						"aria-label": "닫기",
						children: "×"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submitLog,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-grid",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									"커피 이름 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "*" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: form.name,
										onChange: (e) => setForm({
											...form,
											name: e.target.value
										}),
										placeholder: "예: 에티오피아 첼베사"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: [
									"로스터리 ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "*" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										required: true,
										value: form.roastery,
										onChange: (e) => setForm({
											...form,
											roastery: e.target.value
										}),
										placeholder: "예: 센터 커피"
									})
								] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["원산지", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									value: form.origin,
									onChange: (e) => setForm({
										...form,
										origin: e.target.value
									}),
									placeholder: "예: Ethiopia · Gedeb"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["마신 날짜", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "date",
									required: true,
									value: form.date,
									onChange: (e) => setForm({
										...form,
										date: e.target.value
									})
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["추출 방식", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.method,
									onChange: (e) => setForm({
										...form,
										method: e.target.value
									}),
									children: methods.slice(1).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["평점", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: form.rating,
									onChange: (e) => setForm({
										...form,
										rating: e.target.value
									}),
									children: [
										"5.0",
										"4.8",
										"4.5",
										"4.2",
										"4.0",
										"3.5",
										"3.0",
										"2.5",
										"2.0",
										"1.0"
									].map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: item }, item))
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["테이스팅 노트", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							rows: 3,
							value: form.note,
							onChange: (e) => setForm({
								...form,
								note: e.target.value
							}),
							placeholder: "향, 맛, 온도와 그날의 느낌을 적어보세요."
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { children: ["향미 태그", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: form.tags,
							onChange: (e) => setForm({
								...form,
								tags: e.target.value
							}),
							placeholder: "재스민, 복숭아, 홍차 (쉼표로 구분)"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "form-actions",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "secondary-button",
								type: "button",
								onClick: () => setIsModalOpen(false),
								children: "취소"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "primary-button submit-button",
								type: "submit",
								children: "기록 저장하기"
							})]
						})
					]
				})]
			})
		})
	] });
}
//#endregion
export { Home as default };
