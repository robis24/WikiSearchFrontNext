var Rd = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Nb = Rd((Sb, Gs) => {
  function Tn(e, t) {
    const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
    for (let s = 0; s < r.length; s++)
      n[r[s]] = !0;
    return t ? (s) => !!n[s.toLowerCase()] : (s) => !!n[s];
  }
  function Mn(e) {
    if (Z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++) {
        const r = e[n], s = Oe(r) ? Hd(r) : Mn(r);
        if (s)
          for (const i in s)
            t[i] = s[i];
      }
      return t;
    } else {
      if (Oe(e))
        return e;
      if (ge(e))
        return e;
    }
  }
  const Ld = /;(?![^(]*\))/g, jd = /:([^]+)/, Yd = /\/\*.*?\*\//gs;
  function Hd(e) {
    const t = {};
    return e.replace(Yd, "").split(Ld).forEach((n) => {
      if (n) {
        const r = n.split(jd);
        r.length > 1 && (t[r[0].trim()] = r[1].trim());
      }
    }), t;
  }
  function ut(e) {
    let t = "";
    if (Oe(e))
      t = e;
    else if (Z(e))
      for (let n = 0; n < e.length; n++) {
        const r = ut(e[n]);
        r && (t += r + " ");
      }
    else if (ge(e))
      for (const n in e)
        e[n] && (t += n + " ");
    return t.trim();
  }
  const Wd = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Ud = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", zd = /* @__PURE__ */ Tn(Wd), qd = /* @__PURE__ */ Tn(Ud), Kd = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Gd = /* @__PURE__ */ Tn(Kd);
  function Xa(e) {
    return !!e || e === "";
  }
  function Jd(e, t) {
    if (e.length !== t.length)
      return !1;
    let n = !0;
    for (let r = 0; n && r < e.length; r++)
      n = nr(e[r], t[r]);
    return n;
  }
  function nr(e, t) {
    if (e === t)
      return !0;
    let n = Uu(e), r = Uu(t);
    if (n || r)
      return n && r ? e.getTime() === t.getTime() : !1;
    if (n = ts(e), r = ts(t), n || r)
      return e === t;
    if (n = Z(e), r = Z(t), n || r)
      return n && r ? Jd(e, t) : !1;
    if (n = ge(e), r = ge(t), n || r) {
      if (!n || !r)
        return !1;
      const s = Object.keys(e).length, i = Object.keys(t).length;
      if (s !== i)
        return !1;
      for (const o in e) {
        const u = e.hasOwnProperty(o), l = t.hasOwnProperty(o);
        if (u && !l || !u && l || !nr(e[o], t[o]))
          return !1;
      }
    }
    return String(e) === String(t);
  }
  function qo(e, t) {
    return e.findIndex((n) => nr(n, t));
  }
  const Ve = (e) => Oe(e) ? e : e == null ? "" : Z(e) || ge(e) && (e.toString === nl || !ie(e.toString)) ? JSON.stringify(e, el, 2) : String(e), el = (e, t) => t && t.__v_isRef ? el(e, t.value) : Kn(t) ? {
    [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, s]) => (n[`${r} =>`] = s, n), {})
  } : Mr(t) ? {
    [`Set(${t.size})`]: [...t.values()]
  } : ge(t) && !Z(t) && !rl(t) ? String(t) : t, be = {}.NODE_ENV !== "production" ? Object.freeze({}) : {}, Cr = {}.NODE_ENV !== "production" ? Object.freeze([]) : [], ze = () => {
  }, tl = () => !1, Zd = /^on[^a-z]/, hs = (e) => Zd.test(e), Js = (e) => e.startsWith("onUpdate:"), Be = Object.assign, Ko = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  }, Qd = Object.prototype.hasOwnProperty, de = (e, t) => Qd.call(e, t), Z = Array.isArray, Kn = (e) => ps(e) === "[object Map]", Mr = (e) => ps(e) === "[object Set]", Uu = (e) => ps(e) === "[object Date]", ie = (e) => typeof e == "function", Oe = (e) => typeof e == "string", ts = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", Go = (e) => ge(e) && ie(e.then) && ie(e.catch), nl = Object.prototype.toString, ps = (e) => nl.call(e), Jo = (e) => ps(e).slice(8, -1), rl = (e) => ps(e) === "[object Object]", Zo = (e) => Oe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $s = /* @__PURE__ */ Tn(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ), Xd = /* @__PURE__ */ Tn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), gi = (e) => {
    const t = /* @__PURE__ */ Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  }, ef = /-(\w)/g, Ut = gi((e) => e.replace(ef, (t, n) => n ? n.toUpperCase() : "")), tf = /\B([A-Z])/g, ln = gi((e) => e.replace(tf, "-$1").toLowerCase()), rr = gi((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ln = gi((e) => e ? `on${rr(e)}` : ""), ns = (e, t) => !Object.is(e, t), _r = (e, t) => {
    for (let n = 0; n < e.length; n++)
      e[n](t);
  }, Zs = (e, t, n) => {
    Object.defineProperty(e, t, {
      configurable: !0,
      enumerable: !1,
      value: n
    });
  }, Qs = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  }, nf = (e) => {
    const t = Oe(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
  let zu;
  const sl = () => zu || (zu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Xs(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t);
  }
  let mt;
  class il {
    constructor(t = !1) {
      this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = mt, !t && mt && (this.index = (mt.scopes || (mt.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    run(t) {
      if (this._active) {
        const n = mt;
        try {
          return mt = this, t();
        } finally {
          mt = n;
        }
      } else
        ({}).NODE_ENV !== "production" && Xs("cannot run an inactive effect scope.");
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      mt = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      mt = this.parent;
    }
    stop(t) {
      if (this._active) {
        let n, r;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].stop();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !t) {
          const s = this.parent.scopes.pop();
          s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
        }
        this.parent = void 0, this._active = !1;
      }
    }
  }
  function ol(e) {
    return new il(e);
  }
  function rf(e, t = mt) {
    t && t.active && t.effects.push(e);
  }
  function ul() {
    return mt;
  }
  function sf(e) {
    mt ? mt.cleanups.push(e) : {}.NODE_ENV !== "production" && Xs("onScopeDispose() is called when there is no active effect scope to be associated with.");
  }
  const rs = (e) => {
    const t = new Set(e);
    return t.w = 0, t.n = 0, t;
  }, al = (e) => (e.w & Nn) > 0, ll = (e) => (e.n & Nn) > 0, of = ({ deps: e }) => {
    if (e.length)
      for (let t = 0; t < e.length; t++)
        e[t].w |= Nn;
  }, uf = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let r = 0; r < t.length; r++) {
        const s = t[r];
        al(s) && !ll(s) ? s.delete(e) : t[n++] = s, s.w &= ~Nn, s.n &= ~Nn;
      }
      t.length = n;
    }
  }, ei = /* @__PURE__ */ new WeakMap();
  let Ur = 0, Nn = 1;
  const fo = 30;
  let st;
  const Gn = Symbol({}.NODE_ENV !== "production" ? "iterate" : ""), ho = Symbol({}.NODE_ENV !== "production" ? "Map key iterate" : "");
  class Qo {
    constructor(t, n = null, r) {
      this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, rf(this, r);
    }
    run() {
      if (!this.active)
        return this.fn();
      let t = st, n = Fn;
      for (; t; ) {
        if (t === this)
          return;
        t = t.parent;
      }
      try {
        return this.parent = st, st = this, Fn = !0, Nn = 1 << ++Ur, Ur <= fo ? of(this) : qu(this), this.fn();
      } finally {
        Ur <= fo && uf(this), Nn = 1 << --Ur, st = this.parent, Fn = n, this.parent = void 0, this.deferStop && this.stop();
      }
    }
    stop() {
      st === this ? this.deferStop = !0 : this.active && (qu(this), this.onStop && this.onStop(), this.active = !1);
    }
  }
  function qu(e) {
    const { deps: t } = e;
    if (t.length) {
      for (let n = 0; n < t.length; n++)
        t[n].delete(e);
      t.length = 0;
    }
  }
  let Fn = !0;
  const cl = [];
  function ur() {
    cl.push(Fn), Fn = !1;
  }
  function ar() {
    const e = cl.pop();
    Fn = e === void 0 ? !0 : e;
  }
  function ot(e, t, n) {
    if (Fn && st) {
      let r = ei.get(e);
      r || ei.set(e, r = /* @__PURE__ */ new Map());
      let s = r.get(n);
      s || r.set(n, s = rs());
      const i = {}.NODE_ENV !== "production" ? { effect: st, target: e, type: t, key: n } : void 0;
      po(s, i);
    }
  }
  function po(e, t) {
    let n = !1;
    Ur <= fo ? ll(e) || (e.n |= Nn, n = !al(e)) : n = !e.has(st), n && (e.add(st), st.deps.push(e), {}.NODE_ENV !== "production" && st.onTrack && st.onTrack(Object.assign({ effect: st }, t)));
  }
  function cn(e, t, n, r, s, i) {
    const o = ei.get(e);
    if (!o)
      return;
    let u = [];
    if (t === "clear")
      u = [...o.values()];
    else if (n === "length" && Z(e)) {
      const d = Number(r);
      o.forEach((a, c) => {
        (c === "length" || c >= d) && u.push(a);
      });
    } else
      switch (n !== void 0 && u.push(o.get(n)), t) {
        case "add":
          Z(e) ? Zo(n) && u.push(o.get("length")) : (u.push(o.get(Gn)), Kn(e) && u.push(o.get(ho)));
          break;
        case "delete":
          Z(e) || (u.push(o.get(Gn)), Kn(e) && u.push(o.get(ho)));
          break;
        case "set":
          Kn(e) && u.push(o.get(Gn));
          break;
      }
    const l = {}.NODE_ENV !== "production" ? { target: e, type: t, key: n, newValue: r, oldValue: s, oldTarget: i } : void 0;
    if (u.length === 1)
      u[0] && ({}.NODE_ENV !== "production" ? br(u[0], l) : br(u[0]));
    else {
      const d = [];
      for (const a of u)
        a && d.push(...a);
      ({}).NODE_ENV !== "production" ? br(rs(d), l) : br(rs(d));
    }
  }
  function br(e, t) {
    const n = Z(e) ? e : [...e];
    for (const r of n)
      r.computed && Ku(r, t);
    for (const r of n)
      r.computed || Ku(r, t);
  }
  function Ku(e, t) {
    (e !== st || e.allowRecurse) && ({}.NODE_ENV !== "production" && e.onTrigger && e.onTrigger(Be({ effect: e }, t)), e.scheduler ? e.scheduler() : e.run());
  }
  function af(e, t) {
    var n;
    return (n = ei.get(e)) === null || n === void 0 ? void 0 : n.get(t);
  }
  const lf = /* @__PURE__ */ Tn("__proto__,__v_isRef,__isVue"), dl = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ts)
  ), cf = /* @__PURE__ */ _i(), df = /* @__PURE__ */ _i(!1, !0), ff = /* @__PURE__ */ _i(!0), hf = /* @__PURE__ */ _i(!0, !0), Gu = /* @__PURE__ */ pf();
  function pf() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function(...n) {
        const r = re(this);
        for (let i = 0, o = this.length; i < o; i++)
          ot(r, "get", i + "");
        const s = r[t](...n);
        return s === -1 || s === !1 ? r[t](...n.map(re)) : s;
      };
    }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function(...n) {
        ur();
        const r = re(this)[t].apply(this, n);
        return ar(), r;
      };
    }), e;
  }
  function mf(e) {
    const t = re(this);
    return ot(t, "has", e), t.hasOwnProperty(e);
  }
  function _i(e = !1, t = !1) {
    return function(r, s, i) {
      if (s === "__v_isReactive")
        return !e;
      if (s === "__v_isReadonly")
        return e;
      if (s === "__v_isShallow")
        return t;
      if (s === "__v_raw" && i === (e ? t ? Dl : yl : t ? _l : gl).get(r))
        return r;
      const o = Z(r);
      if (!e) {
        if (o && de(Gu, s))
          return Reflect.get(Gu, s, i);
        if (s === "hasOwnProperty")
          return mf;
      }
      const u = Reflect.get(r, s, i);
      return (ts(s) ? dl.has(s) : lf(s)) || (e || ot(r, "get", s), t) ? u : ve(u) ? o && Zo(s) ? u : u.value : ge(u) ? e ? bl(u) : ms(u) : u;
    };
  }
  const gf = /* @__PURE__ */ fl(), _f = /* @__PURE__ */ fl(!0);
  function fl(e = !1) {
    return function(n, r, s, i) {
      let o = n[r];
      if (On(o) && ve(o) && !ve(s))
        return !1;
      if (!e && (!ti(s) && !On(s) && (o = re(o), s = re(s)), !Z(n) && ve(o) && !ve(s)))
        return o.value = s, !0;
      const u = Z(n) && Zo(r) ? Number(r) < n.length : de(n, r), l = Reflect.set(n, r, s, i);
      return n === re(i) && (u ? ns(s, o) && cn(n, "set", r, s, o) : cn(n, "add", r, s)), l;
    };
  }
  function yf(e, t) {
    const n = de(e, t), r = e[t], s = Reflect.deleteProperty(e, t);
    return s && n && cn(e, "delete", t, void 0, r), s;
  }
  function Df(e, t) {
    const n = Reflect.has(e, t);
    return (!ts(t) || !dl.has(t)) && ot(e, "has", t), n;
  }
  function bf(e) {
    return ot(e, "iterate", Z(e) ? "length" : Gn), Reflect.ownKeys(e);
  }
  const hl = {
    get: cf,
    set: gf,
    deleteProperty: yf,
    has: Df,
    ownKeys: bf
  }, pl = {
    get: ff,
    set(e, t) {
      return {}.NODE_ENV !== "production" && Xs(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    },
    deleteProperty(e, t) {
      return {}.NODE_ENV !== "production" && Xs(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
    }
  }, vf = /* @__PURE__ */ Be({}, hl, {
    get: df,
    set: _f
  }), Ef = /* @__PURE__ */ Be({}, pl, {
    get: hf
  }), Xo = (e) => e, yi = (e) => Reflect.getPrototypeOf(e);
  function ks(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const s = re(e), i = re(t);
    n || (t !== i && ot(s, "get", t), ot(s, "get", i));
    const { has: o } = yi(s), u = r ? Xo : n ? eu : ss;
    if (o.call(s, t))
      return u(e.get(t));
    if (o.call(s, i))
      return u(e.get(i));
    e !== s && e.get(t);
  }
  function Ns(e, t = !1) {
    const n = this.__v_raw, r = re(n), s = re(e);
    return t || (e !== s && ot(r, "has", e), ot(r, "has", s)), e === s ? n.has(e) : n.has(e) || n.has(s);
  }
  function Os(e, t = !1) {
    return e = e.__v_raw, !t && ot(re(e), "iterate", Gn), Reflect.get(e, "size", e);
  }
  function Ju(e) {
    e = re(e);
    const t = re(this);
    return yi(t).has.call(t, e) || (t.add(e), cn(t, "add", e, e)), this;
  }
  function Zu(e, t) {
    t = re(t);
    const n = re(this), { has: r, get: s } = yi(n);
    let i = r.call(n, e);
    i ? {}.NODE_ENV !== "production" && ml(n, r, e) : (e = re(e), i = r.call(n, e));
    const o = s.call(n, e);
    return n.set(e, t), i ? ns(t, o) && cn(n, "set", e, t, o) : cn(n, "add", e, t), this;
  }
  function Qu(e) {
    const t = re(this), { has: n, get: r } = yi(t);
    let s = n.call(t, e);
    s ? {}.NODE_ENV !== "production" && ml(t, n, e) : (e = re(e), s = n.call(t, e));
    const i = r ? r.call(t, e) : void 0, o = t.delete(e);
    return s && cn(t, "delete", e, void 0, i), o;
  }
  function Xu() {
    const e = re(this), t = e.size !== 0, n = {}.NODE_ENV !== "production" ? Kn(e) ? new Map(e) : new Set(e) : void 0, r = e.clear();
    return t && cn(e, "clear", void 0, void 0, n), r;
  }
  function Ss(e, t) {
    return function(r, s) {
      const i = this, o = i.__v_raw, u = re(o), l = t ? Xo : e ? eu : ss;
      return !e && ot(u, "iterate", Gn), o.forEach((d, a) => r.call(s, l(d), l(a), i));
    };
  }
  function Ts(e, t, n) {
    return function(...r) {
      const s = this.__v_raw, i = re(s), o = Kn(i), u = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, d = s[e](...r), a = n ? Xo : t ? eu : ss;
      return !t && ot(i, "iterate", l ? ho : Gn), {
        // iterator protocol
        next() {
          const { value: c, done: f } = d.next();
          return f ? { value: c, done: f } : {
            value: u ? [a(c[0]), a(c[1])] : a(c),
            done: f
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function yn(e) {
    return function(...t) {
      if ({}.NODE_ENV !== "production") {
        const n = t[0] ? `on key "${t[0]}" ` : "";
        console.warn(`${rr(e)} operation ${n}failed: target is readonly.`, re(this));
      }
      return e === "delete" ? !1 : this;
    };
  }
  function wf() {
    const e = {
      get(i) {
        return ks(this, i);
      },
      get size() {
        return Os(this);
      },
      has: Ns,
      add: Ju,
      set: Zu,
      delete: Qu,
      clear: Xu,
      forEach: Ss(!1, !1)
    }, t = {
      get(i) {
        return ks(this, i, !1, !0);
      },
      get size() {
        return Os(this);
      },
      has: Ns,
      add: Ju,
      set: Zu,
      delete: Qu,
      clear: Xu,
      forEach: Ss(!1, !0)
    }, n = {
      get(i) {
        return ks(this, i, !0);
      },
      get size() {
        return Os(this, !0);
      },
      has(i) {
        return Ns.call(this, i, !0);
      },
      add: yn(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: yn(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: yn(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: yn(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: Ss(!0, !1)
    }, r = {
      get(i) {
        return ks(this, i, !0, !0);
      },
      get size() {
        return Os(this, !0);
      },
      has(i) {
        return Ns.call(this, i, !0);
      },
      add: yn(
        "add"
        /* TriggerOpTypes.ADD */
      ),
      set: yn(
        "set"
        /* TriggerOpTypes.SET */
      ),
      delete: yn(
        "delete"
        /* TriggerOpTypes.DELETE */
      ),
      clear: yn(
        "clear"
        /* TriggerOpTypes.CLEAR */
      ),
      forEach: Ss(!0, !0)
    };
    return ["keys", "values", "entries", Symbol.iterator].forEach((i) => {
      e[i] = Ts(i, !1, !1), n[i] = Ts(i, !0, !1), t[i] = Ts(i, !1, !0), r[i] = Ts(i, !0, !0);
    }), [
      e,
      n,
      t,
      r
    ];
  }
  const [Cf, xf, Af, Ff] = /* @__PURE__ */ wf();
  function Di(e, t) {
    const n = t ? e ? Ff : Af : e ? xf : Cf;
    return (r, s, i) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? r : Reflect.get(de(n, s) && s in r ? n : r, s, i);
  }
  const kf = {
    get: /* @__PURE__ */ Di(!1, !1)
  }, Nf = {
    get: /* @__PURE__ */ Di(!1, !0)
  }, Of = {
    get: /* @__PURE__ */ Di(!0, !1)
  }, Sf = {
    get: /* @__PURE__ */ Di(!0, !0)
  };
  function ml(e, t, n) {
    const r = re(n);
    if (r !== n && t.call(e, r)) {
      const s = Jo(e);
      console.warn(`Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
  }
  const gl = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap(), Dl = /* @__PURE__ */ new WeakMap();
  function Tf(e) {
    switch (e) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function Mf(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Tf(Jo(e));
  }
  function ms(e) {
    return On(e) ? e : bi(e, !1, hl, kf, gl);
  }
  function Bf(e) {
    return bi(e, !1, vf, Nf, _l);
  }
  function bl(e) {
    return bi(e, !0, pl, Of, yl);
  }
  function vr(e) {
    return bi(e, !0, Ef, Sf, Dl);
  }
  function bi(e, t, n, r, s) {
    if (!ge(e))
      return {}.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
    if (e.__v_raw && !(t && e.__v_isReactive))
      return e;
    const i = s.get(e);
    if (i)
      return i;
    const o = Mf(e);
    if (o === 0)
      return e;
    const u = new Proxy(e, o === 2 ? r : n);
    return s.set(e, u), u;
  }
  function Bt(e) {
    return On(e) ? Bt(e.__v_raw) : !!(e && e.__v_isReactive);
  }
  function On(e) {
    return !!(e && e.__v_isReadonly);
  }
  function ti(e) {
    return !!(e && e.__v_isShallow);
  }
  function ni(e) {
    return Bt(e) || On(e);
  }
  function re(e) {
    const t = e && e.__v_raw;
    return t ? re(t) : e;
  }
  function Ot(e) {
    return Zs(e, "__v_skip", !0), e;
  }
  const ss = (e) => ge(e) ? ms(e) : e, eu = (e) => ge(e) ? bl(e) : e;
  function vl(e) {
    Fn && st && (e = re(e), {}.NODE_ENV !== "production" ? po(e.dep || (e.dep = rs()), {
      target: e,
      type: "get",
      key: "value"
    }) : po(e.dep || (e.dep = rs())));
  }
  function El(e, t) {
    e = re(e);
    const n = e.dep;
    n && ({}.NODE_ENV !== "production" ? br(n, {
      target: e,
      type: "set",
      key: "value",
      newValue: t
    }) : br(n));
  }
  function ve(e) {
    return !!(e && e.__v_isRef === !0);
  }
  function G(e) {
    return If(e, !1);
  }
  function If(e, t) {
    return ve(e) ? e : new Pf(e, t);
  }
  class Pf {
    constructor(t, n) {
      this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : re(t), this._value = n ? t : ss(t);
    }
    get value() {
      return vl(this), this._value;
    }
    set value(t) {
      const n = this.__v_isShallow || ti(t) || On(t);
      t = n ? t : re(t), ns(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ss(t), El(this, t));
    }
  }
  function xe(e) {
    return ve(e) ? e.value : e;
  }
  const Vf = {
    get: (e, t, n) => xe(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
      const s = e[t];
      return ve(s) && !ve(n) ? (s.value = n, !0) : Reflect.set(e, t, n, r);
    }
  };
  function wl(e) {
    return Bt(e) ? e : new Proxy(e, Vf);
  }
  function mo(e) {
    ({}).NODE_ENV !== "production" && !ni(e) && console.warn("toRefs() expects a reactive object but received a plain one.");
    const t = Z(e) ? new Array(e.length) : {};
    for (const n in e)
      t[n] = je(e, n);
    return t;
  }
  class $f {
    constructor(t, n, r) {
      this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
    }
    get value() {
      const t = this._object[this._key];
      return t === void 0 ? this._defaultValue : t;
    }
    set value(t) {
      this._object[this._key] = t;
    }
    get dep() {
      return af(re(this._object), this._key);
    }
  }
  function je(e, t, n) {
    const r = e[t];
    return ve(r) ? r : new $f(e, t, n);
  }
  var Cl;
  class Rf {
    constructor(t, n, r, s) {
      this._setter = n, this.dep = void 0, this.__v_isRef = !0, this[Cl] = !1, this._dirty = !0, this.effect = new Qo(t, () => {
        this._dirty || (this._dirty = !0, El(this));
      }), this.effect.computed = this, this.effect.active = this._cacheable = !s, this.__v_isReadonly = r;
    }
    get value() {
      const t = re(this);
      return vl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value;
    }
    set value(t) {
      this._setter(t);
    }
  }
  Cl = "__v_isReadonly";
  function Lf(e, t, n = !1) {
    let r, s;
    const i = ie(e);
    i ? (r = e, s = {}.NODE_ENV !== "production" ? () => {
      console.warn("Write operation failed: computed value is readonly");
    } : ze) : (r = e.get, s = e.set);
    const o = new Rf(r, s, i || !s, n);
    return {}.NODE_ENV !== "production" && t && !n && (o.effect.onTrack = t.onTrack, o.effect.onTrigger = t.onTrigger), o;
  }
  const Jn = [];
  function Rs(e) {
    Jn.push(e);
  }
  function Ls() {
    Jn.pop();
  }
  function F(e, ...t) {
    if ({}.NODE_ENV === "production")
      return;
    ur();
    const n = Jn.length ? Jn[Jn.length - 1].component : null, r = n && n.appContext.config.warnHandler, s = jf();
    if (r)
      un(r, n, 11, [
        e + t.join(""),
        n && n.proxy,
        s.map(({ vnode: i }) => `at <${ki(n, i.type)}>`).join(`
`),
        s
      ]);
    else {
      const i = [`[Vue warn]: ${e}`, ...t];
      s.length && i.push(`
`, ...Yf(s)), console.warn(...i);
    }
    ar();
  }
  function jf() {
    let e = Jn[Jn.length - 1];
    if (!e)
      return [];
    const t = [];
    for (; e; ) {
      const n = t[0];
      n && n.vnode === e ? n.recurseCount++ : t.push({
        vnode: e,
        recurseCount: 0
      });
      const r = e.component && e.component.parent;
      e = r && r.vnode;
    }
    return t;
  }
  function Yf(e) {
    const t = [];
    return e.forEach((n, r) => {
      t.push(...r === 0 ? [] : [`
`], ...Hf(n));
    }), t;
  }
  function Hf({ vnode: e, recurseCount: t }) {
    const n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, s = ` at <${ki(e.component, e.type, r)}`, i = ">" + n;
    return e.props ? [s, ...Wf(e.props), i] : [s + i];
  }
  function Wf(e) {
    const t = [], n = Object.keys(e);
    return n.slice(0, 3).forEach((r) => {
      t.push(...xl(r, e[r]));
    }), n.length > 3 && t.push(" ..."), t;
  }
  function xl(e, t, n) {
    return Oe(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : ve(t) ? (t = xl(e, re(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : ie(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = re(t), n ? t : [`${e}=`, t]);
  }
  function Uf(e, t) {
    ({}).NODE_ENV !== "production" && e !== void 0 && (typeof e != "number" ? F(`${t} is not a valid number - got ${JSON.stringify(e)}.`) : isNaN(e) && F(`${t} is NaN - the duration expression might be incorrect.`));
  }
  const tu = {
    sp: "serverPrefetch hook",
    bc: "beforeCreate hook",
    c: "created hook",
    bm: "beforeMount hook",
    m: "mounted hook",
    bu: "beforeUpdate hook",
    u: "updated",
    bum: "beforeUnmount hook",
    um: "unmounted hook",
    a: "activated hook",
    da: "deactivated hook",
    ec: "errorCaptured hook",
    rtc: "renderTracked hook",
    rtg: "renderTriggered hook",
    [
      0
      /* ErrorCodes.SETUP_FUNCTION */
    ]: "setup function",
    [
      1
      /* ErrorCodes.RENDER_FUNCTION */
    ]: "render function",
    [
      2
      /* ErrorCodes.WATCH_GETTER */
    ]: "watcher getter",
    [
      3
      /* ErrorCodes.WATCH_CALLBACK */
    ]: "watcher callback",
    [
      4
      /* ErrorCodes.WATCH_CLEANUP */
    ]: "watcher cleanup function",
    [
      5
      /* ErrorCodes.NATIVE_EVENT_HANDLER */
    ]: "native event handler",
    [
      6
      /* ErrorCodes.COMPONENT_EVENT_HANDLER */
    ]: "component event handler",
    [
      7
      /* ErrorCodes.VNODE_HOOK */
    ]: "vnode hook",
    [
      8
      /* ErrorCodes.DIRECTIVE_HOOK */
    ]: "directive hook",
    [
      9
      /* ErrorCodes.TRANSITION_HOOK */
    ]: "transition hook",
    [
      10
      /* ErrorCodes.APP_ERROR_HANDLER */
    ]: "app errorHandler",
    [
      11
      /* ErrorCodes.APP_WARN_HANDLER */
    ]: "app warnHandler",
    [
      12
      /* ErrorCodes.FUNCTION_REF */
    ]: "ref function",
    [
      13
      /* ErrorCodes.ASYNC_COMPONENT_LOADER */
    ]: "async component loader",
    [
      14
      /* ErrorCodes.SCHEDULER */
    ]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
  };
  function un(e, t, n, r) {
    let s;
    try {
      s = r ? e(...r) : e();
    } catch (i) {
      vi(i, t, n);
    }
    return s;
  }
  function Ct(e, t, n, r) {
    if (ie(e)) {
      const i = un(e, t, n, r);
      return i && Go(i) && i.catch((o) => {
        vi(o, t, n);
      }), i;
    }
    const s = [];
    for (let i = 0; i < e.length; i++)
      s.push(Ct(e[i], t, n, r));
    return s;
  }
  function vi(e, t, n, r = !0) {
    const s = t ? t.vnode : null;
    if (t) {
      let i = t.parent;
      const o = t.proxy, u = {}.NODE_ENV !== "production" ? tu[n] : n;
      for (; i; ) {
        const d = i.ec;
        if (d) {
          for (let a = 0; a < d.length; a++)
            if (d[a](e, o, u) === !1)
              return;
        }
        i = i.parent;
      }
      const l = t.appContext.config.errorHandler;
      if (l) {
        un(l, null, 10, [e, o, u]);
        return;
      }
    }
    zf(e, n, s, r);
  }
  function zf(e, t, n, r = !0) {
    if ({}.NODE_ENV !== "production") {
      const s = tu[t];
      if (n && Rs(n), F(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && Ls(), r)
        throw e;
      console.error(e);
    } else
      console.error(e);
  }
  let is = !1, go = !1;
  const Ze = [];
  let jt = 0;
  const xr = [];
  let Lt = null, vn = 0;
  const Al = /* @__PURE__ */ Promise.resolve();
  let nu = null;
  const qf = 100;
  function Cn(e) {
    const t = nu || Al;
    return e ? t.then(this ? e.bind(this) : e) : t;
  }
  function Kf(e) {
    let t = jt + 1, n = Ze.length;
    for (; t < n; ) {
      const r = t + n >>> 1;
      os(Ze[r]) < e ? t = r + 1 : n = r;
    }
    return t;
  }
  function Ei(e) {
    (!Ze.length || !Ze.includes(e, is && e.allowRecurse ? jt + 1 : jt)) && (e.id == null ? Ze.push(e) : Ze.splice(Kf(e.id), 0, e), Fl());
  }
  function Fl() {
    !is && !go && (go = !0, nu = Al.then(Ol));
  }
  function Gf(e) {
    const t = Ze.indexOf(e);
    t > jt && Ze.splice(t, 1);
  }
  function kl(e) {
    Z(e) ? xr.push(...e) : (!Lt || !Lt.includes(e, e.allowRecurse ? vn + 1 : vn)) && xr.push(e), Fl();
  }
  function ea(e, t = is ? jt + 1 : 0) {
    for ({}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()); t < Ze.length; t++) {
      const n = Ze[t];
      if (n && n.pre) {
        if ({}.NODE_ENV !== "production" && ru(e, n))
          continue;
        Ze.splice(t, 1), t--, n();
      }
    }
  }
  function Nl(e) {
    if (xr.length) {
      const t = [...new Set(xr)];
      if (xr.length = 0, Lt) {
        Lt.push(...t);
        return;
      }
      for (Lt = t, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Lt.sort((n, r) => os(n) - os(r)), vn = 0; vn < Lt.length; vn++)
        ({}).NODE_ENV !== "production" && ru(e, Lt[vn]) || Lt[vn]();
      Lt = null, vn = 0;
    }
  }
  const os = (e) => e.id == null ? 1 / 0 : e.id, Jf = (e, t) => {
    const n = os(e) - os(t);
    if (n === 0) {
      if (e.pre && !t.pre)
        return -1;
      if (t.pre && !e.pre)
        return 1;
    }
    return n;
  };
  function Ol(e) {
    go = !1, is = !0, {}.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ze.sort(Jf);
    const t = {}.NODE_ENV !== "production" ? (n) => ru(e, n) : ze;
    try {
      for (jt = 0; jt < Ze.length; jt++) {
        const n = Ze[jt];
        if (n && n.active !== !1) {
          if ({}.NODE_ENV !== "production" && t(n))
            continue;
          un(
            n,
            null,
            14
            /* ErrorCodes.SCHEDULER */
          );
        }
      }
    } finally {
      jt = 0, Ze.length = 0, Nl(e), is = !1, nu = null, (Ze.length || xr.length) && Ol(e);
    }
  }
  function ru(e, t) {
    if (!e.has(t))
      e.set(t, 1);
    else {
      const n = e.get(t);
      if (n > qf) {
        const r = t.ownerInstance, s = r && fu(r.type);
        return F(`Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
      } else
        e.set(t, n + 1);
    }
  }
  let Zn = !1;
  const yr = /* @__PURE__ */ new Set();
  ({}).NODE_ENV !== "production" && (sl().__VUE_HMR_RUNTIME__ = {
    createRecord: Gi(Sl),
    rerender: Gi(Xf),
    reload: Gi(eh)
  });
  const sr = /* @__PURE__ */ new Map();
  function Zf(e) {
    const t = e.type.__hmrId;
    let n = sr.get(t);
    n || (Sl(t, e.type), n = sr.get(t)), n.instances.add(e);
  }
  function Qf(e) {
    sr.get(e.type.__hmrId).instances.delete(e);
  }
  function Sl(e, t) {
    return sr.has(e) ? !1 : (sr.set(e, {
      initialDef: Kr(t),
      instances: /* @__PURE__ */ new Set()
    }), !0);
  }
  function Kr(e) {
    return cc(e) ? e.__vccOpts : e;
  }
  function Xf(e, t) {
    const n = sr.get(e);
    n && (n.initialDef.render = t, [...n.instances].forEach((r) => {
      t && (r.render = t, Kr(r.type).render = t), r.renderCache = [], Zn = !0, r.update(), Zn = !1;
    }));
  }
  function eh(e, t) {
    const n = sr.get(e);
    if (!n)
      return;
    t = Kr(t), ta(n.initialDef, t);
    const r = [...n.instances];
    for (const s of r) {
      const i = Kr(s.type);
      yr.has(i) || (i !== n.initialDef && ta(i, t), yr.add(i)), s.appContext.optionsCache.delete(s.type), s.ceReload ? (yr.add(i), s.ceReload(t.styles), yr.delete(i)) : s.parent ? Ei(s.parent.update) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
    }
    kl(() => {
      for (const s of r)
        yr.delete(Kr(s.type));
    });
  }
  function ta(e, t) {
    Be(e, t);
    for (const n in e)
      n !== "__file" && !(n in t) && delete e[n];
  }
  function Gi(e) {
    return (t, n) => {
      try {
        return e(t, n);
      } catch (r) {
        console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
      }
    };
  }
  let Yt, zr = [], _o = !1;
  function gs(e, ...t) {
    Yt ? Yt.emit(e, ...t) : _o || zr.push({ event: e, args: t });
  }
  function Tl(e, t) {
    var n, r;
    Yt = e, Yt ? (Yt.enabled = !0, zr.forEach(({ event: s, args: i }) => Yt.emit(s, ...i)), zr = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
    window.HTMLElement && // also exclude jsdom
    !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
      Tl(i, t);
    }), setTimeout(() => {
      Yt || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _o = !0, zr = []);
    }, 3e3)) : (_o = !0, zr = []);
  }
  function th(e, t) {
    gs("app:init", e, t, {
      Fragment: Pe,
      Text: Ds,
      Comment: Ye,
      Static: Jr
    });
  }
  function nh(e) {
    gs("app:unmount", e);
  }
  const rh = /* @__PURE__ */ su(
    "component:added"
    /* DevtoolsHooks.COMPONENT_ADDED */
  ), Ml = /* @__PURE__ */ su(
    "component:updated"
    /* DevtoolsHooks.COMPONENT_UPDATED */
  ), sh = /* @__PURE__ */ su(
    "component:removed"
    /* DevtoolsHooks.COMPONENT_REMOVED */
  ), ih = (e) => {
    Yt && typeof Yt.cleanupBuffer == "function" && // remove the component if it wasn't buffered
    !Yt.cleanupBuffer(e) && sh(e);
  };
  function su(e) {
    return (t) => {
      gs(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t);
    };
  }
  const oh = /* @__PURE__ */ Bl(
    "perf:start"
    /* DevtoolsHooks.PERFORMANCE_START */
  ), uh = /* @__PURE__ */ Bl(
    "perf:end"
    /* DevtoolsHooks.PERFORMANCE_END */
  );
  function Bl(e) {
    return (t, n, r) => {
      gs(e, t.appContext.app, t.uid, t, n, r);
    };
  }
  function ah(e, t, n) {
    gs("component:emit", e.appContext.app, e, t, n);
  }
  function lh(e, t, ...n) {
    if (e.isUnmounted)
      return;
    const r = e.vnode.props || be;
    if ({}.NODE_ENV !== "production") {
      const { emitsOptions: a, propsOptions: [c] } = e;
      if (a)
        if (!(t in a))
          (!c || !(Ln(t) in c)) && F(`Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ln(t)}" prop.`);
        else {
          const f = a[t];
          ie(f) && (f(...n) || F(`Invalid event arguments: event validation failed for event "${t}".`));
        }
    }
    let s = n;
    const i = t.startsWith("update:"), o = i && t.slice(7);
    if (o && o in r) {
      const a = `${o === "modelValue" ? "model" : o}Modifiers`, { number: c, trim: f } = r[a] || be;
      f && (s = n.map((m) => Oe(m) ? m.trim() : m)), c && (s = n.map(Qs));
    }
    if ({}.NODE_ENV !== "production" && ah(e, t, s), {}.NODE_ENV !== "production") {
      const a = t.toLowerCase();
      a !== t && r[Ln(a)] && F(`Event "${a}" is emitted in component ${ki(e, e.type)} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ln(t)}" instead of "${t}".`);
    }
    let u, l = r[u = Ln(t)] || // also try camelCase event handler (#2249)
    r[u = Ln(Ut(t))];
    !l && i && (l = r[u = Ln(ln(t))]), l && Ct(l, e, 6, s);
    const d = r[u + "Once"];
    if (d) {
      if (!e.emitted)
        e.emitted = {};
      else if (e.emitted[u])
        return;
      e.emitted[u] = !0, Ct(d, e, 6, s);
    }
  }
  function Il(e, t, n = !1) {
    const r = t.emitsCache, s = r.get(e);
    if (s !== void 0)
      return s;
    const i = e.emits;
    let o = {}, u = !1;
    if (!ie(e)) {
      const l = (d) => {
        const a = Il(d, t, !0);
        a && (u = !0, Be(o, a));
      };
      !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
    }
    return !i && !u ? (ge(e) && r.set(e, null), null) : (Z(i) ? i.forEach((l) => o[l] = null) : Be(o, i), ge(e) && r.set(e, o), o);
  }
  function wi(e, t) {
    return !e || !hs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, ln(t)) || de(e, t));
  }
  let $e = null, Pl = null;
  function ri(e) {
    const t = $e;
    return $e = e, Pl = e && e.type.__scopeId || null, t;
  }
  function Ke(e, t = $e, n) {
    if (!t || e._n)
      return e;
    const r = (...s) => {
      r._d && ha(-1);
      const i = ri(t);
      let o;
      try {
        o = e(...s);
      } finally {
        ri(i), r._d && ha(1);
      }
      return {}.NODE_ENV !== "production" && Ml(t), o;
    };
    return r._n = !0, r._c = !0, r._d = !0, r;
  }
  let yo = !1;
  function si() {
    yo = !0;
  }
  function Ji(e) {
    const { type: t, vnode: n, proxy: r, withProxy: s, props: i, propsOptions: [o], slots: u, attrs: l, emit: d, render: a, renderCache: c, data: f, setupState: m, ctx: _, inheritAttrs: D } = e;
    let S, I;
    const P = ri(e);
    ({}).NODE_ENV !== "production" && (yo = !1);
    try {
      if (n.shapeFlag & 4) {
        const z = s || r;
        S = St(a.call(z, z, c, i, m, f, _)), I = l;
      } else {
        const z = t;
        ({}).NODE_ENV !== "production" && l === i && si(), S = St(z.length > 1 ? z(i, {}.NODE_ENV !== "production" ? {
          get attrs() {
            return si(), l;
          },
          slots: u,
          emit: d
        } : { attrs: l, slots: u, emit: d }) : z(
          i,
          null
          /* we know it doesn't need it */
        )), I = t.props ? l : dh(l);
      }
    } catch (z) {
      Zr.length = 0, vi(
        z,
        e,
        1
        /* ErrorCodes.RENDER_FUNCTION */
      ), S = pe(Ye);
    }
    let $ = S, L;
    if ({}.NODE_ENV !== "production" && S.patchFlag > 0 && S.patchFlag & 2048 && ([$, L] = ch(S)), I && D !== !1) {
      const z = Object.keys(I), { shapeFlag: fe } = $;
      if (z.length) {
        if (fe & 7)
          o && z.some(Js) && (I = fh(I, o)), $ = zt($, I);
        else if ({}.NODE_ENV !== "production" && !yo && $.type !== Ye) {
          const j = Object.keys(l), A = [], g = [];
          for (let b = 0, H = j.length; b < H; b++) {
            const w = j[b];
            hs(w) ? Js(w) || A.push(w[2].toLowerCase() + w.slice(3)) : g.push(w);
          }
          g.length && F(`Extraneous non-props attributes (${g.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), A.length && F(`Extraneous non-emits event listeners (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
        }
      }
    }
    return n.dirs && ({}.NODE_ENV !== "production" && !na($) && F("Runtime directive used on component with non-element root node. The directives will not function as intended."), $ = zt($), $.dirs = $.dirs ? $.dirs.concat(n.dirs) : n.dirs), n.transition && ({}.NODE_ENV !== "production" && !na($) && F("Component inside <Transition> renders non-element root node that cannot be animated."), $.transition = n.transition), {}.NODE_ENV !== "production" && L ? L($) : S = $, ri(P), S;
  }
  const ch = (e) => {
    const t = e.children, n = e.dynamicChildren, r = Vl(t);
    if (!r)
      return [e, void 0];
    const s = t.indexOf(r), i = n ? n.indexOf(r) : -1, o = (u) => {
      t[s] = u, n && (i > -1 ? n[i] = u : u.patchFlag > 0 && (e.dynamicChildren = [...n, u]));
    };
    return [St(r), o];
  };
  function Vl(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      if (Nr(r)) {
        if (r.type !== Ye || r.children === "v-if") {
          if (t)
            return;
          t = r;
        }
      } else
        return;
    }
    return t;
  }
  const dh = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || hs(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  }, fh = (e, t) => {
    const n = {};
    for (const r in e)
      (!Js(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
    return n;
  }, na = (e) => e.shapeFlag & 7 || e.type === Ye;
  function hh(e, t, n) {
    const { props: r, children: s, component: i } = e, { props: o, children: u, patchFlag: l } = t, d = i.emitsOptions;
    if ({}.NODE_ENV !== "production" && (s || u) && Zn || t.dirs || t.transition)
      return !0;
    if (n && l >= 0) {
      if (l & 1024)
        return !0;
      if (l & 16)
        return r ? ra(r, o, d) : !!o;
      if (l & 8) {
        const a = t.dynamicProps;
        for (let c = 0; c < a.length; c++) {
          const f = a[c];
          if (o[f] !== r[f] && !wi(d, f))
            return !0;
        }
      }
    } else
      return (s || u) && (!u || !u.$stable) ? !0 : r === o ? !1 : r ? o ? ra(r, o, d) : !0 : !!o;
    return !1;
  }
  function ra(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length)
      return !0;
    for (let s = 0; s < r.length; s++) {
      const i = r[s];
      if (t[i] !== e[i] && !wi(n, i))
        return !0;
    }
    return !1;
  }
  function ph({ vnode: e, parent: t }, n) {
    for (; t && t.subTree === e; )
      (e = t.vnode).el = n, t = t.parent;
  }
  const mh = (e) => e.__isSuspense;
  function gh(e, t) {
    t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : kl(e);
  }
  function Do(e, t) {
    if (!Me)
      ({}).NODE_ENV !== "production" && F("provide() can only be used inside setup().");
    else {
      let n = Me.provides;
      const r = Me.parent && Me.parent.provides;
      r === n && (n = Me.provides = Object.create(r)), n[e] = t;
    }
  }
  function Qn(e, t, n = !1) {
    const r = Me || $e;
    if (r) {
      const s = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
      if (s && e in s)
        return s[e];
      if (arguments.length > 1)
        return n && ie(t) ? t.call(r.proxy) : t;
      ({}).NODE_ENV !== "production" && F(`injection "${String(e)}" not found.`);
    } else
      ({}).NODE_ENV !== "production" && F("inject() can only be used inside setup() or functional components.");
  }
  function _h(e, t) {
    return iu(e, null, {}.NODE_ENV !== "production" ? Object.assign(Object.assign({}, t), { flush: "post" }) : { flush: "post" });
  }
  const Ms = {};
  function Qe(e, t, n) {
    return {}.NODE_ENV !== "production" && !ie(t) && F("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), iu(e, t, n);
  }
  function iu(e, t, { immediate: n, deep: r, flush: s, onTrack: i, onTrigger: o } = be) {
    ({}).NODE_ENV !== "production" && !t && (n !== void 0 && F('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && F('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
    const u = (L) => {
      F("Invalid watch source: ", L, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
    }, l = ul() === (Me == null ? void 0 : Me.scope) ? Me : null;
    let d, a = !1, c = !1;
    if (ve(e) ? (d = () => e.value, a = ti(e)) : Bt(e) ? (d = () => e, r = !0) : Z(e) ? (c = !0, a = e.some((L) => Bt(L) || ti(L)), d = () => e.map((L) => {
      if (ve(L))
        return L.value;
      if (Bt(L))
        return zn(L);
      if (ie(L))
        return un(
          L,
          l,
          2
          /* ErrorCodes.WATCH_GETTER */
        );
      ({}).NODE_ENV !== "production" && u(L);
    })) : ie(e) ? t ? d = () => un(
      e,
      l,
      2
      /* ErrorCodes.WATCH_GETTER */
    ) : d = () => {
      if (!(l && l.isUnmounted))
        return f && f(), Ct(e, l, 3, [m]);
    } : (d = ze, {}.NODE_ENV !== "production" && u(e)), t && r) {
      const L = d;
      d = () => zn(L());
    }
    let f, m = (L) => {
      f = P.onStop = () => {
        un(
          L,
          l,
          4
          /* ErrorCodes.WATCH_CLEANUP */
        );
      };
    }, _;
    if (as)
      if (m = ze, t ? n && Ct(t, l, 3, [
        d(),
        c ? [] : void 0,
        m
      ]) : d(), s === "sync") {
        const L = yp();
        _ = L.__watcherHandles || (L.__watcherHandles = []);
      } else
        return ze;
    let D = c ? new Array(e.length).fill(Ms) : Ms;
    const S = () => {
      if (P.active)
        if (t) {
          const L = P.run();
          (r || a || (c ? L.some((z, fe) => ns(z, D[fe])) : ns(L, D))) && (f && f(), Ct(t, l, 3, [
            L,
            // pass undefined as the old value when it's changed for the first time
            D === Ms ? void 0 : c && D[0] === Ms ? [] : D,
            m
          ]), D = L);
        } else
          P.run();
    };
    S.allowRecurse = !!t;
    let I;
    s === "sync" ? I = S : s === "post" ? I = () => dt(S, l && l.suspense) : (S.pre = !0, l && (S.id = l.uid), I = () => Ei(S));
    const P = new Qo(d, I);
    ({}).NODE_ENV !== "production" && (P.onTrack = i, P.onTrigger = o), t ? n ? S() : D = P.run() : s === "post" ? dt(P.run.bind(P), l && l.suspense) : P.run();
    const $ = () => {
      P.stop(), l && l.scope && Ko(l.scope.effects, P);
    };
    return _ && _.push($), $;
  }
  function yh(e, t, n) {
    const r = this.proxy, s = Oe(e) ? e.includes(".") ? $l(r, e) : () => r[e] : e.bind(r, r);
    let i;
    ie(t) ? i = t : (i = t.handler, n = t);
    const o = Me;
    Or(this);
    const u = iu(s, i.bind(r), n);
    return o ? Or(o) : er(), u;
  }
  function $l(e, t) {
    const n = t.split(".");
    return () => {
      let r = e;
      for (let s = 0; s < n.length && r; s++)
        r = r[n[s]];
      return r;
    };
  }
  function zn(e, t) {
    if (!ge(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Set(), t.has(e)))
      return e;
    if (t.add(e), ve(e))
      zn(e.value, t);
    else if (Z(e))
      for (let n = 0; n < e.length; n++)
        zn(e[n], t);
    else if (Mr(e) || Kn(e))
      e.forEach((n) => {
        zn(n, t);
      });
    else if (rl(e))
      for (const n in e)
        zn(e[n], t);
    return e;
  }
  function Dh() {
    const e = {
      isMounted: !1,
      isLeaving: !1,
      isUnmounting: !1,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    return xt(() => {
      e.isMounted = !0;
    }), Hl(() => {
      e.isUnmounting = !0;
    }), e;
  }
  const vt = [Function, Array], bh = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      // enter
      onBeforeEnter: vt,
      onEnter: vt,
      onAfterEnter: vt,
      onEnterCancelled: vt,
      // leave
      onBeforeLeave: vt,
      onLeave: vt,
      onAfterLeave: vt,
      onLeaveCancelled: vt,
      // appear
      onBeforeAppear: vt,
      onAppear: vt,
      onAfterAppear: vt,
      onAppearCancelled: vt
    },
    setup(e, { slots: t }) {
      const n = Ai(), r = Dh();
      let s;
      return () => {
        const i = t.default && jl(t.default(), !0);
        if (!i || !i.length)
          return;
        let o = i[0];
        if (i.length > 1) {
          let D = !1;
          for (const S of i)
            if (S.type !== Ye) {
              if ({}.NODE_ENV !== "production" && D) {
                F("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
                break;
              }
              if (o = S, D = !0, {}.NODE_ENV === "production")
                break;
            }
        }
        const u = re(e), { mode: l } = u;
        if ({}.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && F(`invalid <transition> mode: ${l}`), r.isLeaving)
          return Zi(o);
        const d = sa(o);
        if (!d)
          return Zi(o);
        const a = bo(d, u, r, n);
        vo(d, a);
        const c = n.subTree, f = c && sa(c);
        let m = !1;
        const { getTransitionKey: _ } = d.type;
        if (_) {
          const D = _();
          s === void 0 ? s = D : D !== s && (s = D, m = !0);
        }
        if (f && f.type !== Ye && (!Hn(d, f) || m)) {
          const D = bo(f, u, r, n);
          if (vo(f, D), l === "out-in")
            return r.isLeaving = !0, D.afterLeave = () => {
              r.isLeaving = !1, n.update.active !== !1 && n.update();
            }, Zi(o);
          l === "in-out" && d.type !== Ye && (D.delayLeave = (S, I, P) => {
            const $ = Ll(r, f);
            $[String(f.key)] = f, S._leaveCb = () => {
              I(), S._leaveCb = void 0, delete a.delayedLeave;
            }, a.delayedLeave = P;
          });
        }
        return o;
      };
    }
  }, Rl = bh;
  function Ll(e, t) {
    const { leavingVNodes: n } = e;
    let r = n.get(t.type);
    return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
  }
  function bo(e, t, n, r) {
    const { appear: s, mode: i, persisted: o = !1, onBeforeEnter: u, onEnter: l, onAfterEnter: d, onEnterCancelled: a, onBeforeLeave: c, onLeave: f, onAfterLeave: m, onLeaveCancelled: _, onBeforeAppear: D, onAppear: S, onAfterAppear: I, onAppearCancelled: P } = t, $ = String(e.key), L = Ll(n, e), z = (A, g) => {
      A && Ct(A, r, 9, g);
    }, fe = (A, g) => {
      const b = g[1];
      z(A, g), Z(A) ? A.every((H) => H.length <= 1) && b() : A.length <= 1 && b();
    }, j = {
      mode: i,
      persisted: o,
      beforeEnter(A) {
        let g = u;
        if (!n.isMounted)
          if (s)
            g = D || u;
          else
            return;
        A._leaveCb && A._leaveCb(
          !0
          /* cancelled */
        );
        const b = L[$];
        b && Hn(e, b) && b.el._leaveCb && b.el._leaveCb(), z(g, [A]);
      },
      enter(A) {
        let g = l, b = d, H = a;
        if (!n.isMounted)
          if (s)
            g = S || l, b = I || d, H = P || a;
          else
            return;
        let w = !1;
        const ue = A._enterCb = (ke) => {
          w || (w = !0, ke ? z(H, [A]) : z(b, [A]), j.delayedLeave && j.delayedLeave(), A._enterCb = void 0);
        };
        g ? fe(g, [A, ue]) : ue();
      },
      leave(A, g) {
        const b = String(e.key);
        if (A._enterCb && A._enterCb(
          !0
          /* cancelled */
        ), n.isUnmounting)
          return g();
        z(c, [A]);
        let H = !1;
        const w = A._leaveCb = (ue) => {
          H || (H = !0, g(), ue ? z(_, [A]) : z(m, [A]), A._leaveCb = void 0, L[b] === e && delete L[b]);
        };
        L[b] = e, f ? fe(f, [A, w]) : w();
      },
      clone(A) {
        return bo(A, t, n, r);
      }
    };
    return j;
  }
  function Zi(e) {
    if (_s(e))
      return e = zt(e), e.children = null, e;
  }
  function sa(e) {
    return _s(e) ? e.children ? e.children[0] : void 0 : e;
  }
  function vo(e, t) {
    e.shapeFlag & 6 && e.component ? vo(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
  }
  function jl(e, t = !1, n) {
    let r = [], s = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      const u = n == null ? o.key : String(n) + String(o.key != null ? o.key : i);
      o.type === Pe ? (o.patchFlag & 128 && s++, r = r.concat(jl(o.children, t, u))) : (t || o.type !== Ye) && r.push(u != null ? zt(o, { key: u }) : o);
    }
    if (s > 1)
      for (let i = 0; i < r.length; i++)
        r[i].patchFlag = -2;
    return r;
  }
  function he(e) {
    return ie(e) ? { setup: e, name: e.name } : e;
  }
  const Gr = (e) => !!e.type.__asyncLoader, _s = (e) => e.type.__isKeepAlive;
  function vh(e, t) {
    Yl(e, "a", t);
  }
  function Eh(e, t) {
    Yl(e, "da", t);
  }
  function Yl(e, t, n = Me) {
    const r = e.__wdc || (e.__wdc = () => {
      let s = n;
      for (; s; ) {
        if (s.isDeactivated)
          return;
        s = s.parent;
      }
      return e();
    });
    if (Ci(t, r, n), n) {
      let s = n.parent;
      for (; s && s.parent; )
        _s(s.parent.vnode) && wh(r, t, n, s), s = s.parent;
    }
  }
  function wh(e, t, n, r) {
    const s = Ci(
      t,
      e,
      r,
      !0
      /* prepend */
    );
    Br(() => {
      Ko(r[t], s);
    }, n);
  }
  function Ci(e, t, n = Me, r = !1) {
    if (n) {
      const s = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...o) => {
        if (n.isUnmounted)
          return;
        ur(), Or(n);
        const u = Ct(t, n, e, o);
        return er(), ar(), u;
      });
      return r ? s.unshift(i) : s.push(i), i;
    } else if ({}.NODE_ENV !== "production") {
      const s = Ln(tu[e].replace(/ hook$/, ""));
      F(`${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
    }
  }
  const fn = (e) => (t, n = Me) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!as || e === "sp") && Ci(e, (...r) => t(...r), n)
  ), Ch = fn(
    "bm"
    /* LifecycleHooks.BEFORE_MOUNT */
  ), xt = fn(
    "m"
    /* LifecycleHooks.MOUNTED */
  ), xh = fn(
    "bu"
    /* LifecycleHooks.BEFORE_UPDATE */
  ), Ah = fn(
    "u"
    /* LifecycleHooks.UPDATED */
  ), Hl = fn(
    "bum"
    /* LifecycleHooks.BEFORE_UNMOUNT */
  ), Br = fn(
    "um"
    /* LifecycleHooks.UNMOUNTED */
  ), Wl = fn(
    "sp"
    /* LifecycleHooks.SERVER_PREFETCH */
  ), Fh = fn(
    "rtg"
    /* LifecycleHooks.RENDER_TRIGGERED */
  ), kh = fn(
    "rtc"
    /* LifecycleHooks.RENDER_TRACKED */
  );
  function Nh(e, t = Me) {
    Ci("ec", e, t);
  }
  function Ul(e) {
    Xd(e) && F("Do not use built-in directive ids as custom directive id: " + e);
  }
  function ou(e, t) {
    const n = $e;
    if (n === null)
      return {}.NODE_ENV !== "production" && F("withDirectives can only be used inside render functions."), e;
    const r = Fi(n) || n.proxy, s = e.dirs || (e.dirs = []);
    for (let i = 0; i < t.length; i++) {
      let [o, u, l, d = be] = t[i];
      o && (ie(o) && (o = {
        mounted: o,
        updated: o
      }), o.deep && zn(u), s.push({
        dir: o,
        instance: r,
        value: u,
        oldValue: void 0,
        arg: l,
        modifiers: d
      }));
    }
    return e;
  }
  function In(e, t, n, r) {
    const s = e.dirs, i = t && t.dirs;
    for (let o = 0; o < s.length; o++) {
      const u = s[o];
      i && (u.oldValue = i[o].value);
      let l = u.dir[r];
      l && (ur(), Ct(l, n, 8, [
        e.el,
        u,
        e,
        t
      ]), ar());
    }
  }
  const ii = "components";
  function qe(e, t) {
    return ql(ii, e, !0, t) || e;
  }
  const zl = Symbol();
  function uu(e) {
    return Oe(e) ? ql(ii, e, !1) || e : e || zl;
  }
  function ql(e, t, n = !0, r = !1) {
    const s = $e || Me;
    if (s) {
      const i = s.type;
      if (e === ii) {
        const u = fu(
          i,
          !1
          /* do not include inferred name to avoid breaking existing code */
        );
        if (u && (u === t || u === Ut(t) || u === rr(Ut(t))))
          return i;
      }
      const o = (
        // local registration
        // check instance[type] first which is resolved for options API
        ia(s[e] || i[e], t) || // global registration
        ia(s.appContext[e], t)
      );
      if (!o && r)
        return i;
      if ({}.NODE_ENV !== "production" && n && !o) {
        const u = e === ii ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
        F(`Failed to resolve ${e.slice(0, -1)}: ${t}${u}`);
      }
      return o;
    } else
      ({}).NODE_ENV !== "production" && F(`resolve${rr(e.slice(0, -1))} can only be used in render() or setup().`);
  }
  function ia(e, t) {
    return e && (e[t] || e[Ut(t)] || e[rr(Ut(t))]);
  }
  function ys(e, t, n, r) {
    let s;
    const i = n && n[r];
    if (Z(e) || Oe(e)) {
      s = new Array(e.length);
      for (let o = 0, u = e.length; o < u; o++)
        s[o] = t(e[o], o, void 0, i && i[o]);
    } else if (typeof e == "number") {
      ({}).NODE_ENV !== "production" && !Number.isInteger(e) && F(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
      for (let o = 0; o < e; o++)
        s[o] = t(o + 1, o, void 0, i && i[o]);
    } else if (ge(e))
      if (e[Symbol.iterator])
        s = Array.from(e, (o, u) => t(o, u, void 0, i && i[u]));
      else {
        const o = Object.keys(e);
        s = new Array(o.length);
        for (let u = 0, l = o.length; u < l; u++) {
          const d = o[u];
          s[u] = t(e[d], d, u, i && i[u]);
        }
      }
    else
      s = [];
    return n && (n[r] = s), s;
  }
  function it(e, t, n = {}, r, s) {
    if ($e.isCE || $e.parent && Gr($e.parent) && $e.parent.isCE)
      return t !== "default" && (n.name = t), pe("slot", n, r && r());
    let i = e[t];
    ({}).NODE_ENV !== "production" && i && i.length > 1 && (F("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), i = () => []), i && i._c && (i._d = !1), Y();
    const o = i && Kl(i(n)), u = Te(
      Pe,
      {
        key: n.key || // slot content array of a dynamic conditional slot may have a branch
        // key attached in the `createSlots` helper, respect that
        o && o.key || `_${t}`
      },
      o || (r ? r() : []),
      o && e._ === 1 ? 64 : -2
      /* PatchFlags.BAIL */
    );
    return !s && u.scopeId && (u.slotScopeIds = [u.scopeId + "-s"]), i && i._c && (i._d = !0), u;
  }
  function Kl(e) {
    return e.some((t) => Nr(t) ? !(t.type === Ye || t.type === Pe && !Kl(t.children)) : !0) ? e : null;
  }
  const Eo = (e) => e ? ac(e) ? Fi(e) || e.proxy : Eo(e.parent) : null, Xn = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ Be(/* @__PURE__ */ Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => ({}).NODE_ENV !== "production" ? vr(e.props) : e.props,
      $attrs: (e) => ({}).NODE_ENV !== "production" ? vr(e.attrs) : e.attrs,
      $slots: (e) => ({}).NODE_ENV !== "production" ? vr(e.slots) : e.slots,
      $refs: (e) => ({}).NODE_ENV !== "production" ? vr(e.refs) : e.refs,
      $parent: (e) => Eo(e.parent),
      $root: (e) => Eo(e.root),
      $emit: (e) => e.emit,
      $options: (e) => lu(e),
      $forceUpdate: (e) => e.f || (e.f = () => Ei(e.update)),
      $nextTick: (e) => e.n || (e.n = Cn.bind(e.proxy)),
      $watch: (e) => yh.bind(e)
    })
  ), au = (e) => e === "_" || e === "$", Qi = (e, t) => e !== be && !e.__isScriptSetup && de(e, t), Gl = {
    get({ _: e }, t) {
      const { ctx: n, setupState: r, data: s, props: i, accessCache: o, type: u, appContext: l } = e;
      if ({}.NODE_ENV !== "production" && t === "__isVue")
        return !0;
      let d;
      if (t[0] !== "$") {
        const m = o[t];
        if (m !== void 0)
          switch (m) {
            case 1:
              return r[t];
            case 2:
              return s[t];
            case 4:
              return n[t];
            case 3:
              return i[t];
          }
        else {
          if (Qi(r, t))
            return o[t] = 1, r[t];
          if (s !== be && de(s, t))
            return o[t] = 2, s[t];
          if (
            // only cache other properties when instance has declared (thus stable)
            // props
            (d = e.propsOptions[0]) && de(d, t)
          )
            return o[t] = 3, i[t];
          if (n !== be && de(n, t))
            return o[t] = 4, n[t];
          wo && (o[t] = 0);
        }
      }
      const a = Xn[t];
      let c, f;
      if (a)
        return t === "$attrs" && (ot(e, "get", t), {}.NODE_ENV !== "production" && si()), a(e);
      if (
        // css module (injected by vue-loader)
        (c = u.__cssModules) && (c = c[t])
      )
        return c;
      if (n !== be && de(n, t))
        return o[t] = 4, n[t];
      if (
        // global properties
        f = l.config.globalProperties, de(f, t)
      )
        return f[t];
      ({}).NODE_ENV !== "production" && $e && (!Oe(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      t.indexOf("__v") !== 0) && (s !== be && au(t[0]) && de(s, t) ? F(`Property ${JSON.stringify(t)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : e === $e && F(`Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`));
    },
    set({ _: e }, t, n) {
      const { data: r, setupState: s, ctx: i } = e;
      return Qi(s, t) ? (s[t] = n, !0) : {}.NODE_ENV !== "production" && s.__isScriptSetup && de(s, t) ? (F(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : r !== be && de(r, t) ? (r[t] = n, !0) : de(e.props, t) ? ({}.NODE_ENV !== "production" && F(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? ({}.NODE_ENV !== "production" && F(`Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`), !1) : ({}.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
        enumerable: !0,
        configurable: !0,
        value: n
      }) : i[t] = n, !0);
    },
    has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: s, propsOptions: i } }, o) {
      let u;
      return !!n[o] || e !== be && de(e, o) || Qi(t, o) || (u = i[0]) && de(u, o) || de(r, o) || de(Xn, o) || de(s.config.globalProperties, o);
    },
    defineProperty(e, t, n) {
      return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
    }
  };
  ({}).NODE_ENV !== "production" && (Gl.ownKeys = (e) => (F("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(e)));
  function Oh(e) {
    const t = {};
    return Object.defineProperty(t, "_", {
      configurable: !0,
      enumerable: !1,
      get: () => e
    }), Object.keys(Xn).forEach((n) => {
      Object.defineProperty(t, n, {
        configurable: !0,
        enumerable: !1,
        get: () => Xn[n](e),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: ze
      });
    }), t;
  }
  function Sh(e) {
    const { ctx: t, propsOptions: [n] } = e;
    n && Object.keys(n).forEach((r) => {
      Object.defineProperty(t, r, {
        enumerable: !0,
        configurable: !0,
        get: () => e.props[r],
        set: ze
      });
    });
  }
  function Th(e) {
    const { ctx: t, setupState: n } = e;
    Object.keys(re(n)).forEach((r) => {
      if (!n.__isScriptSetup) {
        if (au(r[0])) {
          F(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
          return;
        }
        Object.defineProperty(t, r, {
          enumerable: !0,
          configurable: !0,
          get: () => n[r],
          set: ze
        });
      }
    });
  }
  function Mh() {
    const e = /* @__PURE__ */ Object.create(null);
    return (t, n) => {
      e[n] ? F(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
    };
  }
  let wo = !0;
  function Bh(e) {
    const t = lu(e), n = e.proxy, r = e.ctx;
    wo = !1, t.beforeCreate && oa(
      t.beforeCreate,
      e,
      "bc"
      /* LifecycleHooks.BEFORE_CREATE */
    );
    const {
      // state
      data: s,
      computed: i,
      methods: o,
      watch: u,
      provide: l,
      inject: d,
      // lifecycle
      created: a,
      beforeMount: c,
      mounted: f,
      beforeUpdate: m,
      updated: _,
      activated: D,
      deactivated: S,
      beforeDestroy: I,
      beforeUnmount: P,
      destroyed: $,
      unmounted: L,
      render: z,
      renderTracked: fe,
      renderTriggered: j,
      errorCaptured: A,
      serverPrefetch: g,
      // public API
      expose: b,
      inheritAttrs: H,
      // assets
      components: w,
      directives: ue,
      filters: ke
    } = t, K = {}.NODE_ENV !== "production" ? Mh() : null;
    if ({}.NODE_ENV !== "production") {
      const [V] = e.propsOptions;
      if (V)
        for (const te in V)
          K("Props", te);
    }
    if (d && Ih(d, r, K, e.appContext.config.unwrapInjectedRef), o)
      for (const V in o) {
        const te = o[V];
        ie(te) ? ({}.NODE_ENV !== "production" ? Object.defineProperty(r, V, {
          value: te.bind(n),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : r[V] = te.bind(n), {}.NODE_ENV !== "production" && K("Methods", V)) : {}.NODE_ENV !== "production" && F(`Method "${V}" has type "${typeof te}" in the component definition. Did you reference the function correctly?`);
      }
    if (s) {
      ({}).NODE_ENV !== "production" && !ie(s) && F("The data option must be a function. Plain object usage is no longer supported.");
      const V = s.call(n, n);
      if ({}.NODE_ENV !== "production" && Go(V) && F("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !ge(V))
        ({}).NODE_ENV !== "production" && F("data() should return an object.");
      else if (e.data = ms(V), {}.NODE_ENV !== "production")
        for (const te in V)
          K("Data", te), au(te[0]) || Object.defineProperty(r, te, {
            configurable: !0,
            enumerable: !0,
            get: () => V[te],
            set: ze
          });
    }
    if (wo = !0, i)
      for (const V in i) {
        const te = i[V], He = ie(te) ? te.bind(n, n) : ie(te.get) ? te.get.bind(n, n) : ze;
        ({}).NODE_ENV !== "production" && He === ze && F(`Computed property "${V}" has no getter.`);
        const at = !ie(te) && ie(te.set) ? te.set.bind(n) : {}.NODE_ENV !== "production" ? () => {
          F(`Write operation failed: computed property "${V}" is readonly.`);
        } : ze, Dt = B({
          get: He,
          set: at
        });
        Object.defineProperty(r, V, {
          enumerable: !0,
          configurable: !0,
          get: () => Dt.value,
          set: (pt) => Dt.value = pt
        }), {}.NODE_ENV !== "production" && K("Computed", V);
      }
    if (u)
      for (const V in u)
        Jl(u[V], r, n, V);
    if (l) {
      const V = ie(l) ? l.call(n) : l;
      Reflect.ownKeys(V).forEach((te) => {
        Do(te, V[te]);
      });
    }
    a && oa(
      a,
      e,
      "c"
      /* LifecycleHooks.CREATED */
    );
    function ee(V, te) {
      Z(te) ? te.forEach((He) => V(He.bind(n))) : te && V(te.bind(n));
    }
    if (ee(Ch, c), ee(xt, f), ee(xh, m), ee(Ah, _), ee(vh, D), ee(Eh, S), ee(Nh, A), ee(kh, fe), ee(Fh, j), ee(Hl, P), ee(Br, L), ee(Wl, g), Z(b))
      if (b.length) {
        const V = e.exposed || (e.exposed = {});
        b.forEach((te) => {
          Object.defineProperty(V, te, {
            get: () => n[te],
            set: (He) => n[te] = He
          });
        });
      } else
        e.exposed || (e.exposed = {});
    z && e.render === ze && (e.render = z), H != null && (e.inheritAttrs = H), w && (e.components = w), ue && (e.directives = ue);
  }
  function Ih(e, t, n = ze, r = !1) {
    Z(e) && (e = Co(e));
    for (const s in e) {
      const i = e[s];
      let o;
      ge(i) ? "default" in i ? o = Qn(
        i.from || s,
        i.default,
        !0
        /* treat default function as factory */
      ) : o = Qn(i.from || s) : o = Qn(i), ve(o) ? r ? Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => o.value,
        set: (u) => o.value = u
      }) : ({}.NODE_ENV !== "production" && F(`injected property "${s}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), t[s] = o) : t[s] = o, {}.NODE_ENV !== "production" && n("Inject", s);
    }
  }
  function oa(e, t, n) {
    Ct(Z(e) ? e.map((r) => r.bind(t.proxy)) : e.bind(t.proxy), t, n);
  }
  function Jl(e, t, n, r) {
    const s = r.includes(".") ? $l(n, r) : () => n[r];
    if (Oe(e)) {
      const i = t[e];
      ie(i) ? Qe(s, i) : {}.NODE_ENV !== "production" && F(`Invalid watch handler specified by key "${e}"`, i);
    } else if (ie(e))
      Qe(s, e.bind(n));
    else if (ge(e))
      if (Z(e))
        e.forEach((i) => Jl(i, t, n, r));
      else {
        const i = ie(e.handler) ? e.handler.bind(n) : t[e.handler];
        ie(i) ? Qe(s, i, e) : {}.NODE_ENV !== "production" && F(`Invalid watch handler specified by key "${e.handler}"`, i);
      }
    else
      ({}).NODE_ENV !== "production" && F(`Invalid watch option: "${r}"`, e);
  }
  function lu(e) {
    const t = e.type, { mixins: n, extends: r } = t, { mixins: s, optionsCache: i, config: { optionMergeStrategies: o } } = e.appContext, u = i.get(t);
    let l;
    return u ? l = u : !s.length && !n && !r ? l = t : (l = {}, s.length && s.forEach((d) => oi(l, d, o, !0)), oi(l, t, o)), ge(t) && i.set(t, l), l;
  }
  function oi(e, t, n, r = !1) {
    const { mixins: s, extends: i } = t;
    i && oi(e, i, n, !0), s && s.forEach((o) => oi(e, o, n, !0));
    for (const o in t)
      if (r && o === "expose")
        ({}).NODE_ENV !== "production" && F('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
      else {
        const u = Ph[o] || n && n[o];
        e[o] = u ? u(e[o], t[o]) : t[o];
      }
    return e;
  }
  const Ph = {
    data: ua,
    props: jn,
    emits: jn,
    // objects
    methods: jn,
    computed: jn,
    // lifecycle
    beforeCreate: rt,
    created: rt,
    beforeMount: rt,
    mounted: rt,
    beforeUpdate: rt,
    updated: rt,
    beforeDestroy: rt,
    beforeUnmount: rt,
    destroyed: rt,
    unmounted: rt,
    activated: rt,
    deactivated: rt,
    errorCaptured: rt,
    serverPrefetch: rt,
    // assets
    components: jn,
    directives: jn,
    // watch
    watch: $h,
    // provide / inject
    provide: ua,
    inject: Vh
  };
  function ua(e, t) {
    return t ? e ? function() {
      return Be(ie(e) ? e.call(this, this) : e, ie(t) ? t.call(this, this) : t);
    } : t : e;
  }
  function Vh(e, t) {
    return jn(Co(e), Co(t));
  }
  function Co(e) {
    if (Z(e)) {
      const t = {};
      for (let n = 0; n < e.length; n++)
        t[e[n]] = e[n];
      return t;
    }
    return e;
  }
  function rt(e, t) {
    return e ? [...new Set([].concat(e, t))] : t;
  }
  function jn(e, t) {
    return e ? Be(Be(/* @__PURE__ */ Object.create(null), e), t) : t;
  }
  function $h(e, t) {
    if (!e)
      return t;
    if (!t)
      return e;
    const n = Be(/* @__PURE__ */ Object.create(null), e);
    for (const r in t)
      n[r] = rt(e[r], t[r]);
    return n;
  }
  function Rh(e, t, n, r = !1) {
    const s = {}, i = {};
    Zs(i, xi, 1), e.propsDefaults = /* @__PURE__ */ Object.create(null), Zl(e, t, s, i);
    for (const o in e.propsOptions[0])
      o in s || (s[o] = void 0);
    ({}).NODE_ENV !== "production" && Xl(t || {}, s, e), n ? e.props = r ? s : Bf(s) : e.type.props ? e.props = s : e.props = i, e.attrs = i;
  }
  function Lh(e) {
    for (; e; ) {
      if (e.type.__hmrId)
        return !0;
      e = e.parent;
    }
  }
  function jh(e, t, n, r) {
    const { props: s, attrs: i, vnode: { patchFlag: o } } = e, u = re(s), [l] = e.propsOptions;
    let d = !1;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !({}.NODE_ENV !== "production" && Lh(e)) && (r || o > 0) && !(o & 16)
    ) {
      if (o & 8) {
        const a = e.vnode.dynamicProps;
        for (let c = 0; c < a.length; c++) {
          let f = a[c];
          if (wi(e.emitsOptions, f))
            continue;
          const m = t[f];
          if (l)
            if (de(i, f))
              m !== i[f] && (i[f] = m, d = !0);
            else {
              const _ = Ut(f);
              s[_] = xo(
                l,
                u,
                _,
                m,
                e,
                !1
                /* isAbsent */
              );
            }
          else
            m !== i[f] && (i[f] = m, d = !0);
        }
      }
    } else {
      Zl(e, t, s, i) && (d = !0);
      let a;
      for (const c in u)
        (!t || // for camelCase
        !de(t, c) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((a = ln(c)) === c || !de(t, a))) && (l ? n && // for camelCase
        (n[c] !== void 0 || // for kebab-case
        n[a] !== void 0) && (s[c] = xo(
          l,
          u,
          c,
          void 0,
          e,
          !0
          /* isAbsent */
        )) : delete s[c]);
      if (i !== u)
        for (const c in i)
          (!t || !de(t, c)) && (delete i[c], d = !0);
    }
    d && cn(e, "set", "$attrs"), {}.NODE_ENV !== "production" && Xl(t || {}, s, e);
  }
  function Zl(e, t, n, r) {
    const [s, i] = e.propsOptions;
    let o = !1, u;
    if (t)
      for (let l in t) {
        if ($s(l))
          continue;
        const d = t[l];
        let a;
        s && de(s, a = Ut(l)) ? !i || !i.includes(a) ? n[a] = d : (u || (u = {}))[a] = d : wi(e.emitsOptions, l) || (!(l in r) || d !== r[l]) && (r[l] = d, o = !0);
      }
    if (i) {
      const l = re(n), d = u || be;
      for (let a = 0; a < i.length; a++) {
        const c = i[a];
        n[c] = xo(s, l, c, d[c], e, !de(d, c));
      }
    }
    return o;
  }
  function xo(e, t, n, r, s, i) {
    const o = e[n];
    if (o != null) {
      const u = de(o, "default");
      if (u && r === void 0) {
        const l = o.default;
        if (o.type !== Function && ie(l)) {
          const { propsDefaults: d } = s;
          n in d ? r = d[n] : (Or(s), r = d[n] = l.call(null, t), er());
        } else
          r = l;
      }
      o[
        0
        /* BooleanFlags.shouldCast */
      ] && (i && !u ? r = !1 : o[
        1
        /* BooleanFlags.shouldCastTrue */
      ] && (r === "" || r === ln(n)) && (r = !0));
    }
    return r;
  }
  function Ql(e, t, n = !1) {
    const r = t.propsCache, s = r.get(e);
    if (s)
      return s;
    const i = e.props, o = {}, u = [];
    let l = !1;
    if (!ie(e)) {
      const a = (c) => {
        l = !0;
        const [f, m] = Ql(c, t, !0);
        Be(o, f), m && u.push(...m);
      };
      !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
    }
    if (!i && !l)
      return ge(e) && r.set(e, Cr), Cr;
    if (Z(i))
      for (let a = 0; a < i.length; a++) {
        ({}).NODE_ENV !== "production" && !Oe(i[a]) && F("props must be strings when using array syntax.", i[a]);
        const c = Ut(i[a]);
        aa(c) && (o[c] = be);
      }
    else if (i) {
      ({}).NODE_ENV !== "production" && !ge(i) && F("invalid props options", i);
      for (const a in i) {
        const c = Ut(a);
        if (aa(c)) {
          const f = i[a], m = o[c] = Z(f) || ie(f) ? { type: f } : Object.assign({}, f);
          if (m) {
            const _ = ca(Boolean, m.type), D = ca(String, m.type);
            m[
              0
              /* BooleanFlags.shouldCast */
            ] = _ > -1, m[
              1
              /* BooleanFlags.shouldCastTrue */
            ] = D < 0 || _ < D, (_ > -1 || de(m, "default")) && u.push(c);
          }
        }
      }
    }
    const d = [o, u];
    return ge(e) && r.set(e, d), d;
  }
  function aa(e) {
    return e[0] !== "$" ? !0 : ({}.NODE_ENV !== "production" && F(`Invalid prop name: "${e}" is a reserved property.`), !1);
  }
  function Ao(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : "";
  }
  function la(e, t) {
    return Ao(e) === Ao(t);
  }
  function ca(e, t) {
    return Z(t) ? t.findIndex((n) => la(n, e)) : ie(t) && la(t, e) ? 0 : -1;
  }
  function Xl(e, t, n) {
    const r = re(t), s = n.propsOptions[0];
    for (const i in s) {
      let o = s[i];
      o != null && Yh(i, r[i], o, !de(e, i) && !de(e, ln(i)));
    }
  }
  function Yh(e, t, n, r) {
    const { type: s, required: i, validator: o } = n;
    if (i && r) {
      F('Missing required prop: "' + e + '"');
      return;
    }
    if (!(t == null && !n.required)) {
      if (s != null && s !== !0) {
        let u = !1;
        const l = Z(s) ? s : [s], d = [];
        for (let a = 0; a < l.length && !u; a++) {
          const { valid: c, expectedType: f } = Wh(t, l[a]);
          d.push(f || ""), u = c;
        }
        if (!u) {
          F(Uh(e, t, d));
          return;
        }
      }
      o && !o(t) && F('Invalid prop: custom validator check failed for prop "' + e + '".');
    }
  }
  const Hh = /* @__PURE__ */ Tn("String,Number,Boolean,Function,Symbol,BigInt");
  function Wh(e, t) {
    let n;
    const r = Ao(t);
    if (Hh(r)) {
      const s = typeof e;
      n = s === r.toLowerCase(), !n && s === "object" && (n = e instanceof t);
    } else
      r === "Object" ? n = ge(e) : r === "Array" ? n = Z(e) : r === "null" ? n = e === null : n = e instanceof t;
    return {
      valid: n,
      expectedType: r
    };
  }
  function Uh(e, t, n) {
    let r = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(rr).join(" | ")}`;
    const s = n[0], i = Jo(t), o = da(t, s), u = da(t, i);
    return n.length === 1 && fa(s) && !zh(s, i) && (r += ` with value ${o}`), r += `, got ${i} `, fa(i) && (r += `with value ${u}.`), r;
  }
  function da(e, t) {
    return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
  }
  function fa(e) {
    return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
  }
  function zh(...e) {
    return e.some((t) => t.toLowerCase() === "boolean");
  }
  const ec = (e) => e[0] === "_" || e === "$stable", cu = (e) => Z(e) ? e.map(St) : [St(e)], qh = (e, t, n) => {
    if (t._n)
      return t;
    const r = Ke((...s) => ({}.NODE_ENV !== "production" && Me && F(`Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), cu(t(...s))), n);
    return r._c = !1, r;
  }, tc = (e, t, n) => {
    const r = e._ctx;
    for (const s in e) {
      if (ec(s))
        continue;
      const i = e[s];
      if (ie(i))
        t[s] = qh(s, i, r);
      else if (i != null) {
        ({}).NODE_ENV !== "production" && F(`Non-function value encountered for slot "${s}". Prefer function slots for better performance.`);
        const o = cu(i);
        t[s] = () => o;
      }
    }
  }, nc = (e, t) => {
    ({}).NODE_ENV !== "production" && !_s(e.vnode) && F("Non-function value encountered for default slot. Prefer function slots for better performance.");
    const n = cu(t);
    e.slots.default = () => n;
  }, Kh = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? (e.slots = re(t), Zs(t, "_", n)) : tc(t, e.slots = {});
    } else
      e.slots = {}, t && nc(e, t);
    Zs(e.slots, xi, 1);
  }, Gh = (e, t, n) => {
    const { vnode: r, slots: s } = e;
    let i = !0, o = be;
    if (r.shapeFlag & 32) {
      const u = t._;
      u ? {}.NODE_ENV !== "production" && Zn ? Be(s, t) : n && u === 1 ? i = !1 : (Be(s, t), !n && u === 1 && delete s._) : (i = !t.$stable, tc(t, s)), o = t;
    } else
      t && (nc(e, t), o = { default: 1 });
    if (i)
      for (const u in s)
        !ec(u) && !(u in o) && delete s[u];
  };
  function rc() {
    return {
      app: null,
      config: {
        isNativeTag: tl,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  let Jh = 0;
  function Zh(e, t) {
    return function(r, s = null) {
      ie(r) || (r = Object.assign({}, r)), s != null && !ge(s) && ({}.NODE_ENV !== "production" && F("root props passed to app.mount() must be an object."), s = null);
      const i = rc(), o = /* @__PURE__ */ new Set();
      let u = !1;
      const l = i.app = {
        _uid: Jh++,
        _component: r,
        _props: s,
        _container: null,
        _context: i,
        _instance: null,
        version: ga,
        get config() {
          return i.config;
        },
        set config(d) {
          ({}).NODE_ENV !== "production" && F("app.config cannot be replaced. Modify individual options instead.");
        },
        use(d, ...a) {
          return o.has(d) ? {}.NODE_ENV !== "production" && F("Plugin has already been applied to target app.") : d && ie(d.install) ? (o.add(d), d.install(l, ...a)) : ie(d) ? (o.add(d), d(l, ...a)) : {}.NODE_ENV !== "production" && F('A plugin must either be a function or an object with an "install" function.'), l;
        },
        mixin(d) {
          return i.mixins.includes(d) ? {}.NODE_ENV !== "production" && F("Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")) : i.mixins.push(d), l;
        },
        component(d, a) {
          return {}.NODE_ENV !== "production" && ko(d, i.config), a ? ({}.NODE_ENV !== "production" && i.components[d] && F(`Component "${d}" has already been registered in target app.`), i.components[d] = a, l) : i.components[d];
        },
        directive(d, a) {
          return {}.NODE_ENV !== "production" && Ul(d), a ? ({}.NODE_ENV !== "production" && i.directives[d] && F(`Directive "${d}" has already been registered in target app.`), i.directives[d] = a, l) : i.directives[d];
        },
        mount(d, a, c) {
          if (u)
            ({}).NODE_ENV !== "production" && F("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
          else {
            ({}).NODE_ENV !== "production" && d.__vue_app__ && F("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
            const f = pe(r, s);
            return f.appContext = i, {}.NODE_ENV !== "production" && (i.reload = () => {
              e(zt(f), d, c);
            }), a && t ? t(f, d) : e(f, d, c), u = !0, l._container = d, d.__vue_app__ = l, {}.NODE_ENV !== "production" && (l._instance = f.component, th(l, ga)), Fi(f.component) || f.component.proxy;
          }
        },
        unmount() {
          u ? (e(null, l._container), {}.NODE_ENV !== "production" && (l._instance = null, nh(l)), delete l._container.__vue_app__) : {}.NODE_ENV !== "production" && F("Cannot unmount an app that is not mounted.");
        },
        provide(d, a) {
          return {}.NODE_ENV !== "production" && d in i.provides && F(`App already provides property with key "${String(d)}". It will be overwritten with the new value.`), i.provides[d] = a, l;
        }
      };
      return l;
    };
  }
  function Fo(e, t, n, r, s = !1) {
    if (Z(e)) {
      e.forEach((f, m) => Fo(f, t && (Z(t) ? t[m] : t), n, r, s));
      return;
    }
    if (Gr(r) && !s)
      return;
    const i = r.shapeFlag & 4 ? Fi(r.component) || r.component.proxy : r.el, o = s ? null : i, { i: u, r: l } = e;
    if ({}.NODE_ENV !== "production" && !u) {
      F("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
      return;
    }
    const d = t && t.r, a = u.refs === be ? u.refs = {} : u.refs, c = u.setupState;
    if (d != null && d !== l && (Oe(d) ? (a[d] = null, de(c, d) && (c[d] = null)) : ve(d) && (d.value = null)), ie(l))
      un(l, u, 12, [o, a]);
    else {
      const f = Oe(l), m = ve(l);
      if (f || m) {
        const _ = () => {
          if (e.f) {
            const D = f ? de(c, l) ? c[l] : a[l] : l.value;
            s ? Z(D) && Ko(D, i) : Z(D) ? D.includes(i) || D.push(i) : f ? (a[l] = [i], de(c, l) && (c[l] = a[l])) : (l.value = [i], e.k && (a[e.k] = l.value));
          } else
            f ? (a[l] = o, de(c, l) && (c[l] = o)) : m ? (l.value = o, e.k && (a[e.k] = o)) : {}.NODE_ENV !== "production" && F("Invalid template ref type:", l, `(${typeof l})`);
        };
        o ? (_.id = -1, dt(_, n)) : _();
      } else
        ({}).NODE_ENV !== "production" && F("Invalid template ref type:", l, `(${typeof l})`);
    }
  }
  let Lr, wn;
  function en(e, t) {
    e.appContext.config.performance && ui() && wn.mark(`vue-${t}-${e.uid}`), {}.NODE_ENV !== "production" && oh(e, t, ui() ? wn.now() : Date.now());
  }
  function tn(e, t) {
    if (e.appContext.config.performance && ui()) {
      const n = `vue-${t}-${e.uid}`, r = n + ":end";
      wn.mark(r), wn.measure(`<${ki(e, e.type)}> ${t}`, n, r), wn.clearMarks(n), wn.clearMarks(r);
    }
    ({}).NODE_ENV !== "production" && uh(e, t, ui() ? wn.now() : Date.now());
  }
  function ui() {
    return Lr !== void 0 || (typeof window < "u" && window.performance ? (Lr = !0, wn = window.performance) : Lr = !1), Lr;
  }
  function Qh() {
    const e = [];
    if ({}.NODE_ENV !== "production" && e.length) {
      const t = e.length > 1;
      console.warn(`Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
    }
  }
  const dt = gh;
  function Xh(e) {
    return ep(e);
  }
  function ep(e, t) {
    Qh();
    const n = sl();
    n.__VUE__ = !0, {}.NODE_ENV !== "production" && Tl(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
    const { insert: r, remove: s, patchProp: i, createElement: o, createText: u, createComment: l, setText: d, setElementText: a, parentNode: c, nextSibling: f, setScopeId: m = ze, insertStaticContent: _ } = e, D = (h, p, y, C = null, E = null, O = null, M = !1, k = null, T = {}.NODE_ENV !== "production" && Zn ? !1 : !!p.dynamicChildren) => {
      if (h === p)
        return;
      h && !Hn(h, p) && (C = fr(h), se(h, E, O, !0), h = null), p.patchFlag === -2 && (T = !1, p.dynamicChildren = null);
      const { type: x, ref: J, shapeFlag: U } = p;
      switch (x) {
        case Ds:
          S(h, p, y, C);
          break;
        case Ye:
          I(h, p, y, C);
          break;
        case Jr:
          h == null ? P(p, y, C, M) : {}.NODE_ENV !== "production" && $(h, p, y, M);
          break;
        case Pe:
          ue(h, p, y, C, E, O, M, k, T);
          break;
        default:
          U & 1 ? fe(h, p, y, C, E, O, M, k, T) : U & 6 ? ke(h, p, y, C, E, O, M, k, T) : U & 64 || U & 128 ? x.process(h, p, y, C, E, O, M, k, T, _n) : {}.NODE_ENV !== "production" && F("Invalid VNode type:", x, `(${typeof x})`);
      }
      J != null && E && Fo(J, h && h.ref, O, p || h, !p);
    }, S = (h, p, y, C) => {
      if (h == null)
        r(p.el = u(p.children), y, C);
      else {
        const E = p.el = h.el;
        p.children !== h.children && d(E, p.children);
      }
    }, I = (h, p, y, C) => {
      h == null ? r(p.el = l(p.children || ""), y, C) : p.el = h.el;
    }, P = (h, p, y, C) => {
      [h.el, h.anchor] = _(h.children, p, y, C, h.el, h.anchor);
    }, $ = (h, p, y, C) => {
      if (p.children !== h.children) {
        const E = f(h.anchor);
        z(h), [p.el, p.anchor] = _(p.children, y, E, C);
      } else
        p.el = h.el, p.anchor = h.anchor;
    }, L = ({ el: h, anchor: p }, y, C) => {
      let E;
      for (; h && h !== p; )
        E = f(h), r(h, y, C), h = E;
      r(p, y, C);
    }, z = ({ el: h, anchor: p }) => {
      let y;
      for (; h && h !== p; )
        y = f(h), s(h), h = y;
      s(p);
    }, fe = (h, p, y, C, E, O, M, k, T) => {
      M = M || p.type === "svg", h == null ? j(p, y, C, E, O, M, k, T) : b(h, p, E, O, M, k, T);
    }, j = (h, p, y, C, E, O, M, k) => {
      let T, x;
      const { type: J, props: U, shapeFlag: Q, transition: ne, dirs: ae } = h;
      if (T = h.el = o(h.type, O, U && U.is, U), Q & 8 ? a(T, h.children) : Q & 16 && g(h.children, T, null, C, E, O && J !== "foreignObject", M, k), ae && In(h, null, C, "created"), A(T, h, h.scopeId, M, C), U) {
        for (const v in U)
          v !== "value" && !$s(v) && i(T, v, null, U[v], O, h.children, C, E, kt);
        "value" in U && i(T, "value", null, U.value), (x = U.onVnodeBeforeMount) && Rt(x, C, h);
      }
      ({}).NODE_ENV !== "production" && (Object.defineProperty(T, "__vnode", {
        value: h,
        enumerable: !1
      }), Object.defineProperty(T, "__vueParentComponent", {
        value: C,
        enumerable: !1
      })), ae && In(h, null, C, "beforeMount");
      const De = (!E || E && !E.pendingBranch) && ne && !ne.persisted;
      De && ne.beforeEnter(T), r(T, p, y), ((x = U && U.onVnodeMounted) || De || ae) && dt(() => {
        x && Rt(x, C, h), De && ne.enter(T), ae && In(h, null, C, "mounted");
      }, E);
    }, A = (h, p, y, C, E) => {
      if (y && m(h, y), C)
        for (let O = 0; O < C.length; O++)
          m(h, C[O]);
      if (E) {
        let O = E.subTree;
        if ({}.NODE_ENV !== "production" && O.patchFlag > 0 && O.patchFlag & 2048 && (O = Vl(O.children) || O), p === O) {
          const M = E.vnode;
          A(h, M, M.scopeId, M.slotScopeIds, E.parent);
        }
      }
    }, g = (h, p, y, C, E, O, M, k, T = 0) => {
      for (let x = T; x < h.length; x++) {
        const J = h[x] = k ? En(h[x]) : St(h[x]);
        D(null, J, p, y, C, E, O, M, k);
      }
    }, b = (h, p, y, C, E, O, M) => {
      const k = p.el = h.el;
      let { patchFlag: T, dynamicChildren: x, dirs: J } = p;
      T |= h.patchFlag & 16;
      const U = h.props || be, Q = p.props || be;
      let ne;
      y && Pn(y, !1), (ne = Q.onVnodeBeforeUpdate) && Rt(ne, y, p, h), J && In(p, h, y, "beforeUpdate"), y && Pn(y, !0), {}.NODE_ENV !== "production" && Zn && (T = 0, M = !1, x = null);
      const ae = E && p.type !== "foreignObject";
      if (x ? (H(h.dynamicChildren, x, k, y, C, ae, O), {}.NODE_ENV !== "production" && y && y.type.__hmrId && js(h, p)) : M || He(h, p, k, null, y, C, ae, O, !1), T > 0) {
        if (T & 16)
          w(k, p, U, Q, y, C, E);
        else if (T & 2 && U.class !== Q.class && i(k, "class", null, Q.class, E), T & 4 && i(k, "style", U.style, Q.style, E), T & 8) {
          const De = p.dynamicProps;
          for (let v = 0; v < De.length; v++) {
            const q = De[v], we = U[q], Ge = Q[q];
            (Ge !== we || q === "value") && i(k, q, we, Ge, E, h.children, y, C, kt);
          }
        }
        T & 1 && h.children !== p.children && a(k, p.children);
      } else
        !M && x == null && w(k, p, U, Q, y, C, E);
      ((ne = Q.onVnodeUpdated) || J) && dt(() => {
        ne && Rt(ne, y, p, h), J && In(p, h, y, "updated");
      }, C);
    }, H = (h, p, y, C, E, O, M) => {
      for (let k = 0; k < p.length; k++) {
        const T = h[k], x = p[k], J = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          T.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (T.type === Pe || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !Hn(T, x) || // - In the case of a component, it could contain anything.
          T.shapeFlag & 70) ? c(T.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            y
          )
        );
        D(T, x, J, null, C, E, O, M, !0);
      }
    }, w = (h, p, y, C, E, O, M) => {
      if (y !== C) {
        if (y !== be)
          for (const k in y)
            !$s(k) && !(k in C) && i(h, k, y[k], null, M, p.children, E, O, kt);
        for (const k in C) {
          if ($s(k))
            continue;
          const T = C[k], x = y[k];
          T !== x && k !== "value" && i(h, k, x, T, M, p.children, E, O, kt);
        }
        "value" in C && i(h, "value", y.value, C.value);
      }
    }, ue = (h, p, y, C, E, O, M, k, T) => {
      const x = p.el = h ? h.el : u(""), J = p.anchor = h ? h.anchor : u("");
      let { patchFlag: U, dynamicChildren: Q, slotScopeIds: ne } = p;
      ({}).NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
      (Zn || U & 2048) && (U = 0, T = !1, Q = null), ne && (k = k ? k.concat(ne) : ne), h == null ? (r(x, y, C), r(J, y, C), g(p.children, y, J, E, O, M, k, T)) : U > 0 && U & 64 && Q && // #2715 the previous fragment could've been a BAILed one as a result
      // of renderSlot() with no valid children
      h.dynamicChildren ? (H(h.dynamicChildren, Q, y, E, O, M, k), {}.NODE_ENV !== "production" && E && E.type.__hmrId ? js(h, p) : (
        // #2080 if the stable fragment has a key, it's a <template v-for> that may
        //  get moved around. Make sure all root level vnodes inherit el.
        // #2134 or if it's a component root, it may also get moved around
        // as the component is being moved.
        (p.key != null || E && p === E.subTree) && js(
          h,
          p,
          !0
          /* shallow */
        )
      )) : He(h, p, y, J, E, O, M, k, T);
    }, ke = (h, p, y, C, E, O, M, k, T) => {
      p.slotScopeIds = k, h == null ? p.shapeFlag & 512 ? E.ctx.activate(p, y, C, M, T) : K(p, y, C, E, O, M, T) : ee(h, p, T);
    }, K = (h, p, y, C, E, O, M) => {
      const k = h.component = ap(h, C, E);
      if ({}.NODE_ENV !== "production" && k.type.__hmrId && Zf(k), {}.NODE_ENV !== "production" && (Rs(h), en(k, "mount")), _s(h) && (k.ctx.renderer = _n), {}.NODE_ENV !== "production" && en(k, "init"), cp(k), {}.NODE_ENV !== "production" && tn(k, "init"), k.asyncDep) {
        if (E && E.registerDep(k, V), !h.el) {
          const T = k.subTree = pe(Ye);
          I(null, T, p, y);
        }
        return;
      }
      V(k, h, p, y, E, O, M), {}.NODE_ENV !== "production" && (Ls(), tn(k, "mount"));
    }, ee = (h, p, y) => {
      const C = p.component = h.component;
      if (hh(h, p, y))
        if (C.asyncDep && !C.asyncResolved) {
          ({}).NODE_ENV !== "production" && Rs(p), te(C, p, y), {}.NODE_ENV !== "production" && Ls();
          return;
        } else
          C.next = p, Gf(C.update), C.update();
      else
        p.el = h.el, C.vnode = p;
    }, V = (h, p, y, C, E, O, M) => {
      const k = () => {
        if (h.isMounted) {
          let { next: J, bu: U, u: Q, parent: ne, vnode: ae } = h, De = J, v;
          ({}).NODE_ENV !== "production" && Rs(J || h.vnode), Pn(h, !1), J ? (J.el = ae.el, te(h, J, M)) : J = ae, U && _r(U), (v = J.props && J.props.onVnodeBeforeUpdate) && Rt(v, ne, J, ae), Pn(h, !0), {}.NODE_ENV !== "production" && en(h, "render");
          const q = Ji(h);
          ({}).NODE_ENV !== "production" && tn(h, "render");
          const we = h.subTree;
          h.subTree = q, {}.NODE_ENV !== "production" && en(h, "patch"), D(
            we,
            q,
            // parent may have changed if it's in a teleport
            c(we.el),
            // anchor may have changed if it's in a fragment
            fr(we),
            h,
            E,
            O
          ), {}.NODE_ENV !== "production" && tn(h, "patch"), J.el = q.el, De === null && ph(h, q.el), Q && dt(Q, E), (v = J.props && J.props.onVnodeUpdated) && dt(() => Rt(v, ne, J, ae), E), {}.NODE_ENV !== "production" && Ml(h), {}.NODE_ENV !== "production" && Ls();
        } else {
          let J;
          const { el: U, props: Q } = p, { bm: ne, m: ae, parent: De } = h, v = Gr(p);
          if (Pn(h, !1), ne && _r(ne), !v && (J = Q && Q.onVnodeBeforeMount) && Rt(J, De, p), Pn(h, !0), U && $r) {
            const q = () => {
              ({}).NODE_ENV !== "production" && en(h, "render"), h.subTree = Ji(h), {}.NODE_ENV !== "production" && tn(h, "render"), {}.NODE_ENV !== "production" && en(h, "hydrate"), $r(U, h.subTree, h, E, null), {}.NODE_ENV !== "production" && tn(h, "hydrate");
            };
            v ? p.type.__asyncLoader().then(
              // note: we are moving the render call into an async callback,
              // which means it won't track dependencies - but it's ok because
              // a server-rendered async wrapper is already in resolved state
              // and it will never need to change.
              () => !h.isUnmounted && q()
            ) : q();
          } else {
            ({}).NODE_ENV !== "production" && en(h, "render");
            const q = h.subTree = Ji(h);
            ({}).NODE_ENV !== "production" && tn(h, "render"), {}.NODE_ENV !== "production" && en(h, "patch"), D(null, q, y, C, h, E, O), {}.NODE_ENV !== "production" && tn(h, "patch"), p.el = q.el;
          }
          if (ae && dt(ae, E), !v && (J = Q && Q.onVnodeMounted)) {
            const q = p;
            dt(() => Rt(J, De, q), E);
          }
          (p.shapeFlag & 256 || De && Gr(De.vnode) && De.vnode.shapeFlag & 256) && h.a && dt(h.a, E), h.isMounted = !0, {}.NODE_ENV !== "production" && rh(h), p = y = C = null;
        }
      }, T = h.effect = new Qo(
        k,
        () => Ei(x),
        h.scope
        // track it in component's effect scope
      ), x = h.update = () => T.run();
      x.id = h.uid, Pn(h, !0), {}.NODE_ENV !== "production" && (T.onTrack = h.rtc ? (J) => _r(h.rtc, J) : void 0, T.onTrigger = h.rtg ? (J) => _r(h.rtg, J) : void 0, x.ownerInstance = h), x();
    }, te = (h, p, y) => {
      p.component = h;
      const C = h.vnode.props;
      h.vnode = p, h.next = null, jh(h, p.props, C, y), Gh(h, p.children, y), ur(), ea(), ar();
    }, He = (h, p, y, C, E, O, M, k, T = !1) => {
      const x = h && h.children, J = h ? h.shapeFlag : 0, U = p.children, { patchFlag: Q, shapeFlag: ne } = p;
      if (Q > 0) {
        if (Q & 128) {
          Dt(x, U, y, C, E, O, M, k, T);
          return;
        } else if (Q & 256) {
          at(x, U, y, C, E, O, M, k, T);
          return;
        }
      }
      ne & 8 ? (J & 16 && kt(x, E, O), U !== x && a(y, U)) : J & 16 ? ne & 16 ? Dt(x, U, y, C, E, O, M, k, T) : kt(x, E, O, !0) : (J & 8 && a(y, ""), ne & 16 && g(U, y, C, E, O, M, k, T));
    }, at = (h, p, y, C, E, O, M, k, T) => {
      h = h || Cr, p = p || Cr;
      const x = h.length, J = p.length, U = Math.min(x, J);
      let Q;
      for (Q = 0; Q < U; Q++) {
        const ne = p[Q] = T ? En(p[Q]) : St(p[Q]);
        D(h[Q], ne, y, null, E, O, M, k, T);
      }
      x > J ? kt(h, E, O, !0, !1, U) : g(p, y, C, E, O, M, k, T, U);
    }, Dt = (h, p, y, C, E, O, M, k, T) => {
      let x = 0;
      const J = p.length;
      let U = h.length - 1, Q = J - 1;
      for (; x <= U && x <= Q; ) {
        const ne = h[x], ae = p[x] = T ? En(p[x]) : St(p[x]);
        if (Hn(ne, ae))
          D(ne, ae, y, null, E, O, M, k, T);
        else
          break;
        x++;
      }
      for (; x <= U && x <= Q; ) {
        const ne = h[U], ae = p[Q] = T ? En(p[Q]) : St(p[Q]);
        if (Hn(ne, ae))
          D(ne, ae, y, null, E, O, M, k, T);
        else
          break;
        U--, Q--;
      }
      if (x > U) {
        if (x <= Q) {
          const ne = Q + 1, ae = ne < J ? p[ne].el : C;
          for (; x <= Q; )
            D(null, p[x] = T ? En(p[x]) : St(p[x]), y, ae, E, O, M, k, T), x++;
        }
      } else if (x > Q)
        for (; x <= U; )
          se(h[x], E, O, !0), x++;
      else {
        const ne = x, ae = x, De = /* @__PURE__ */ new Map();
        for (x = ae; x <= Q; x++) {
          const We = p[x] = T ? En(p[x]) : St(p[x]);
          We.key != null && ({}.NODE_ENV !== "production" && De.has(We.key) && F("Duplicate keys found during update:", JSON.stringify(We.key), "Make sure keys are unique."), De.set(We.key, x));
        }
        let v, q = 0;
        const we = Q - ae + 1;
        let Ge = !1, bt = 0;
        const Zt = new Array(we);
        for (x = 0; x < we; x++)
          Zt[x] = 0;
        for (x = ne; x <= U; x++) {
          const We = h[x];
          if (q >= we) {
            se(We, E, O, !0);
            continue;
          }
          let ct;
          if (We.key != null)
            ct = De.get(We.key);
          else
            for (v = ae; v <= Q; v++)
              if (Zt[v - ae] === 0 && Hn(We, p[v])) {
                ct = v;
                break;
              }
          ct === void 0 ? se(We, E, O, !0) : (Zt[ct - ae] = x + 1, ct >= bt ? bt = ct : Ge = !0, D(We, p[ct], y, null, E, O, M, k, T), q++);
        }
        const Rr = Ge ? tp(Zt) : Cr;
        for (v = Rr.length - 1, x = we - 1; x >= 0; x--) {
          const We = ae + x, ct = p[We], xs = We + 1 < J ? p[We + 1].el : C;
          Zt[x] === 0 ? D(null, ct, y, xs, E, O, M, k, T) : Ge && (v < 0 || x !== Rr[v] ? pt(
            ct,
            y,
            xs,
            2
            /* MoveType.REORDER */
          ) : v--);
        }
      }
    }, pt = (h, p, y, C, E = null) => {
      const { el: O, type: M, transition: k, children: T, shapeFlag: x } = h;
      if (x & 6) {
        pt(h.component.subTree, p, y, C);
        return;
      }
      if (x & 128) {
        h.suspense.move(p, y, C);
        return;
      }
      if (x & 64) {
        M.move(h, p, y, _n);
        return;
      }
      if (M === Pe) {
        r(O, p, y);
        for (let U = 0; U < T.length; U++)
          pt(T[U], p, y, C);
        r(h.anchor, p, y);
        return;
      }
      if (M === Jr) {
        L(h, p, y);
        return;
      }
      if (C !== 2 && x & 1 && k)
        if (C === 0)
          k.beforeEnter(O), r(O, p, y), dt(() => k.enter(O), E);
        else {
          const { leave: U, delayLeave: Q, afterLeave: ne } = k, ae = () => r(O, p, y), De = () => {
            U(O, () => {
              ae(), ne && ne();
            });
          };
          Q ? Q(O, ae, De) : De();
        }
      else
        r(O, p, y);
    }, se = (h, p, y, C = !1, E = !1) => {
      const { type: O, props: M, ref: k, children: T, dynamicChildren: x, shapeFlag: J, patchFlag: U, dirs: Q } = h;
      if (k != null && Fo(k, null, y, h, !0), J & 256) {
        p.ctx.deactivate(h);
        return;
      }
      const ne = J & 1 && Q, ae = !Gr(h);
      let De;
      if (ae && (De = M && M.onVnodeBeforeUnmount) && Rt(De, p, h), J & 6)
        Ui(h.component, y, C);
      else {
        if (J & 128) {
          h.suspense.unmount(y, C);
          return;
        }
        ne && In(h, null, p, "beforeUnmount"), J & 64 ? h.type.remove(h, p, y, E, _n, C) : x && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (O !== Pe || U > 0 && U & 64) ? kt(x, p, y, !1, !0) : (O === Pe && U & 384 || !E && J & 16) && kt(T, p, y), C && Se(h);
      }
      (ae && (De = M && M.onVnodeUnmounted) || ne) && dt(() => {
        De && Rt(De, p, h), ne && In(h, null, p, "unmounted");
      }, y);
    }, Se = (h) => {
      const { type: p, el: y, anchor: C, transition: E } = h;
      if (p === Pe) {
        ({}).NODE_ENV !== "production" && h.patchFlag > 0 && h.patchFlag & 2048 && E && !E.persisted ? h.children.forEach((M) => {
          M.type === Ye ? s(M.el) : Se(M);
        }) : lt(y, C);
        return;
      }
      if (p === Jr) {
        z(h);
        return;
      }
      const O = () => {
        s(y), E && !E.persisted && E.afterLeave && E.afterLeave();
      };
      if (h.shapeFlag & 1 && E && !E.persisted) {
        const { leave: M, delayLeave: k } = E, T = () => M(y, O);
        k ? k(h.el, O, T) : T();
      } else
        O();
    }, lt = (h, p) => {
      let y;
      for (; h !== p; )
        y = f(h), s(h), h = y;
      s(p);
    }, Ui = (h, p, y) => {
      ({}).NODE_ENV !== "production" && h.type.__hmrId && Qf(h);
      const { bum: C, scope: E, update: O, subTree: M, um: k } = h;
      C && _r(C), E.stop(), O && (O.active = !1, se(M, h, p, y)), k && dt(k, p), dt(() => {
        h.isUnmounted = !0;
      }, p), p && p.pendingBranch && !p.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === p.pendingId && (p.deps--, p.deps === 0 && p.resolve()), {}.NODE_ENV !== "production" && ih(h);
    }, kt = (h, p, y, C = !1, E = !1, O = 0) => {
      for (let M = O; M < h.length; M++)
        se(h[M], p, y, C, E);
    }, fr = (h) => h.shapeFlag & 6 ? fr(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : f(h.anchor || h.el), Cs = (h, p, y) => {
      h == null ? p._vnode && se(p._vnode, null, null, !0) : D(p._vnode || null, h, p, null, null, null, y), ea(), Nl(), p._vnode = h;
    }, _n = {
      p: D,
      um: se,
      m: pt,
      r: Se,
      mt: K,
      mc: g,
      pc: He,
      pbc: H,
      n: fr,
      o: e
    };
    let Vr, $r;
    return t && ([Vr, $r] = t(_n)), {
      render: Cs,
      hydrate: Vr,
      createApp: Zh(Cs, Vr)
    };
  }
  function Pn({ effect: e, update: t }, n) {
    e.allowRecurse = t.allowRecurse = n;
  }
  function js(e, t, n = !1) {
    const r = e.children, s = t.children;
    if (Z(r) && Z(s))
      for (let i = 0; i < r.length; i++) {
        const o = r[i];
        let u = s[i];
        u.shapeFlag & 1 && !u.dynamicChildren && ((u.patchFlag <= 0 || u.patchFlag === 32) && (u = s[i] = En(s[i]), u.el = o.el), n || js(o, u)), u.type === Ds && (u.el = o.el), {}.NODE_ENV !== "production" && u.type === Ye && !u.el && (u.el = o.el);
      }
  }
  function tp(e) {
    const t = e.slice(), n = [0];
    let r, s, i, o, u;
    const l = e.length;
    for (r = 0; r < l; r++) {
      const d = e[r];
      if (d !== 0) {
        if (s = n[n.length - 1], e[s] < d) {
          t[r] = s, n.push(r);
          continue;
        }
        for (i = 0, o = n.length - 1; i < o; )
          u = i + o >> 1, e[n[u]] < d ? i = u + 1 : o = u;
        d < e[n[i]] && (i > 0 && (t[r] = n[i - 1]), n[i] = r);
      }
    }
    for (i = n.length, o = n[i - 1]; i-- > 0; )
      n[i] = o, o = t[o];
    return n;
  }
  const np = (e) => e.__isTeleport, Pe = Symbol({}.NODE_ENV !== "production" ? "Fragment" : void 0), Ds = Symbol({}.NODE_ENV !== "production" ? "Text" : void 0), Ye = Symbol({}.NODE_ENV !== "production" ? "Comment" : void 0), Jr = Symbol({}.NODE_ENV !== "production" ? "Static" : void 0), Zr = [];
  let Tt = null;
  function Y(e = !1) {
    Zr.push(Tt = e ? null : []);
  }
  function rp() {
    Zr.pop(), Tt = Zr[Zr.length - 1] || null;
  }
  let us = 1;
  function ha(e) {
    us += e;
  }
  function sc(e) {
    return e.dynamicChildren = us > 0 ? Tt || Cr : null, rp(), us > 0 && Tt && Tt.push(e), e;
  }
  function oe(e, t, n, r, s, i) {
    return sc(Ce(
      e,
      t,
      n,
      r,
      s,
      i,
      !0
      /* isBlock */
    ));
  }
  function Te(e, t, n, r, s) {
    return sc(pe(
      e,
      t,
      n,
      r,
      s,
      !0
      /* isBlock: prevent a block from tracking itself */
    ));
  }
  function Nr(e) {
    return e ? e.__v_isVNode === !0 : !1;
  }
  function Hn(e, t) {
    return {}.NODE_ENV !== "production" && t.shapeFlag & 6 && yr.has(t.type) ? (e.shapeFlag &= -257, t.shapeFlag &= -513, !1) : e.type === t.type && e.key === t.key;
  }
  const sp = (...e) => oc(...e), xi = "__vInternal", ic = ({ key: e }) => e ?? null, Ys = ({ ref: e, ref_key: t, ref_for: n }) => e != null ? Oe(e) || ve(e) || ie(e) ? { i: $e, r: e, k: t, f: !!n } : e : null;
  function Ce(e, t = null, n = null, r = 0, s = null, i = e === Pe ? 0 : 1, o = !1, u = !1) {
    const l = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && ic(t),
      ref: t && Ys(t),
      scopeId: Pl,
      slotScopeIds: null,
      children: n,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: r,
      dynamicProps: s,
      dynamicChildren: null,
      appContext: null,
      ctx: $e
    };
    return u ? (du(l, n), i & 128 && e.normalize(l)) : n && (l.shapeFlag |= Oe(n) ? 8 : 16), {}.NODE_ENV !== "production" && l.key !== l.key && F("VNode created with invalid key (NaN). VNode type:", l.type), us > 0 && // avoid a block node from tracking itself
    !o && // has current parent block
    Tt && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (l.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    l.patchFlag !== 32 && Tt.push(l), l;
  }
  const pe = {}.NODE_ENV !== "production" ? sp : oc;
  function oc(e, t = null, n = null, r = 0, s = null, i = !1) {
    if ((!e || e === zl) && ({}.NODE_ENV !== "production" && !e && F(`Invalid vnode type when creating vnode: ${e}.`), e = Ye), Nr(e)) {
      const u = zt(
        e,
        t,
        !0
        /* mergeRef: true */
      );
      return n && du(u, n), us > 0 && !i && Tt && (u.shapeFlag & 6 ? Tt[Tt.indexOf(e)] = u : Tt.push(u)), u.patchFlag |= -2, u;
    }
    if (cc(e) && (e = e.__vccOpts), t) {
      t = ip(t);
      let { class: u, style: l } = t;
      u && !Oe(u) && (t.class = ut(u)), ge(l) && (ni(l) && !Z(l) && (l = Be({}, l)), t.style = Mn(l));
    }
    const o = Oe(e) ? 1 : mh(e) ? 128 : np(e) ? 64 : ge(e) ? 4 : ie(e) ? 2 : 0;
    return {}.NODE_ENV !== "production" && o & 4 && ni(e) && (e = re(e), F("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, e)), Ce(e, t, n, r, s, o, i, !0);
  }
  function ip(e) {
    return e ? ni(e) || xi in e ? Be({}, e) : e : null;
  }
  function zt(e, t, n = !1) {
    const { props: r, ref: s, patchFlag: i, children: o } = e, u = t ? ir(r || {}, t) : r;
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: u,
      key: u && ic(u),
      ref: t && t.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        n && s ? Z(s) ? s.concat(Ys(t)) : [s, Ys(t)] : Ys(t)
      ) : s,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: {}.NODE_ENV !== "production" && i === -1 && Z(o) ? o.map(uc) : o,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: t && e.type !== Pe ? i === -1 ? 16 : i | 16 : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && zt(e.ssContent),
      ssFallback: e.ssFallback && zt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    };
  }
  function uc(e) {
    const t = zt(e);
    return Z(e.children) && (t.children = e.children.map(uc)), t;
  }
  function _t(e = " ", t = 0) {
    return pe(Ds, null, e, t);
  }
  function Re(e = "", t = !1) {
    return t ? (Y(), Te(Ye, null, e)) : pe(Ye, null, e);
  }
  function St(e) {
    return e == null || typeof e == "boolean" ? pe(Ye) : Z(e) ? pe(
      Pe,
      null,
      // #3666, avoid reference pollution when reusing vnode
      e.slice()
    ) : typeof e == "object" ? En(e) : pe(Ds, null, String(e));
  }
  function En(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : zt(e);
  }
  function du(e, t) {
    let n = 0;
    const { shapeFlag: r } = e;
    if (t == null)
      t = null;
    else if (Z(t))
      n = 16;
    else if (typeof t == "object")
      if (r & 65) {
        const s = t.default;
        s && (s._c && (s._d = !1), du(e, s()), s._c && (s._d = !0));
        return;
      } else {
        n = 32;
        const s = t._;
        !s && !(xi in t) ? t._ctx = $e : s === 3 && $e && ($e.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
      }
    else
      ie(t) ? (t = { default: t, _ctx: $e }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [_t(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n;
  }
  function ir(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      for (const s in r)
        if (s === "class")
          t.class !== r.class && (t.class = ut([t.class, r.class]));
        else if (s === "style")
          t.style = Mn([t.style, r.style]);
        else if (hs(s)) {
          const i = t[s], o = r[s];
          o && i !== o && !(Z(i) && i.includes(o)) && (t[s] = i ? [].concat(i, o) : o);
        } else
          s !== "" && (t[s] = r[s]);
    }
    return t;
  }
  function Rt(e, t, n, r = null) {
    Ct(e, t, 7, [
      n,
      r
    ]);
  }
  const op = rc();
  let up = 0;
  function ap(e, t, n) {
    const r = e.type, s = (t ? t.appContext : e.appContext) || op, i = {
      uid: up++,
      vnode: e,
      type: r,
      parent: t,
      appContext: s,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new il(
        !0
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(s.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: Ql(r, s),
      emitsOptions: Il(r, s),
      // emit
      emit: null,
      emitted: null,
      // props default value
      propsDefaults: be,
      // inheritAttrs
      inheritAttrs: r.inheritAttrs,
      // state
      ctx: be,
      data: be,
      props: be,
      attrs: be,
      slots: be,
      refs: be,
      setupState: be,
      setupContext: null,
      // suspense related
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    return {}.NODE_ENV !== "production" ? i.ctx = Oh(i) : i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = lh.bind(null, i), e.ce && e.ce(i), i;
  }
  let Me = null;
  const Ai = () => Me || $e, Or = (e) => {
    Me = e, e.scope.on();
  }, er = () => {
    Me && Me.scope.off(), Me = null;
  }, lp = /* @__PURE__ */ Tn("slot,component");
  function ko(e, t) {
    const n = t.isNativeTag || tl;
    (lp(e) || n(e)) && F("Do not use built-in or reserved HTML elements as component id: " + e);
  }
  function ac(e) {
    return e.vnode.shapeFlag & 4;
  }
  let as = !1;
  function cp(e, t = !1) {
    as = t;
    const { props: n, children: r } = e.vnode, s = ac(e);
    Rh(e, n, s, t), Kh(e, r);
    const i = s ? dp(e, t) : void 0;
    return as = !1, i;
  }
  function dp(e, t) {
    var n;
    const r = e.type;
    if ({}.NODE_ENV !== "production") {
      if (r.name && ko(r.name, e.appContext.config), r.components) {
        const i = Object.keys(r.components);
        for (let o = 0; o < i.length; o++)
          ko(i[o], e.appContext.config);
      }
      if (r.directives) {
        const i = Object.keys(r.directives);
        for (let o = 0; o < i.length; o++)
          Ul(i[o]);
      }
      r.compilerOptions && fp() && F('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
    }
    e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = Ot(new Proxy(e.ctx, Gl)), {}.NODE_ENV !== "production" && Sh(e);
    const { setup: s } = r;
    if (s) {
      const i = e.setupContext = s.length > 1 ? hp(e) : null;
      Or(e), ur();
      const o = un(s, e, 0, [{}.NODE_ENV !== "production" ? vr(e.props) : e.props, i]);
      if (ar(), er(), Go(o)) {
        if (o.then(er, er), t)
          return o.then((u) => {
            pa(e, u, t);
          }).catch((u) => {
            vi(
              u,
              e,
              0
              /* ErrorCodes.SETUP_FUNCTION */
            );
          });
        if (e.asyncDep = o, {}.NODE_ENV !== "production" && !e.suspense) {
          const u = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
          F(`Component <${u}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
        }
      } else
        pa(e, o, t);
    } else
      lc(e, t);
  }
  function pa(e, t, n) {
    ie(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) ? ({}.NODE_ENV !== "production" && Nr(t) && F("setup() should not return VNodes directly - return a render function instead."), {}.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = wl(t), {}.NODE_ENV !== "production" && Th(e)) : {}.NODE_ENV !== "production" && t !== void 0 && F(`setup() should return an object. Received: ${t === null ? "null" : typeof t}`), lc(e, n);
  }
  let No;
  const fp = () => !No;
  function lc(e, t, n) {
    const r = e.type;
    if (!e.render) {
      if (!t && No && !r.render) {
        const s = r.template || lu(e).template;
        if (s) {
          ({}).NODE_ENV !== "production" && en(e, "compile");
          const { isCustomElement: i, compilerOptions: o } = e.appContext.config, { delimiters: u, compilerOptions: l } = r, d = Be(Be({
            isCustomElement: i,
            delimiters: u
          }, o), l);
          r.render = No(s, d), {}.NODE_ENV !== "production" && tn(e, "compile");
        }
      }
      e.render = r.render || ze;
    }
    Or(e), ur(), Bh(e), ar(), er(), {}.NODE_ENV !== "production" && !r.render && e.render === ze && !t && (r.template ? F(
      'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
      /* should not happen */
    ) : F("Component is missing template or render function."));
  }
  function ma(e) {
    return new Proxy(e.attrs, {}.NODE_ENV !== "production" ? {
      get(t, n) {
        return si(), ot(e, "get", "$attrs"), t[n];
      },
      set() {
        return F("setupContext.attrs is readonly."), !1;
      },
      deleteProperty() {
        return F("setupContext.attrs is readonly."), !1;
      }
    } : {
      get(t, n) {
        return ot(e, "get", "$attrs"), t[n];
      }
    });
  }
  function hp(e) {
    const t = (r) => {
      if ({}.NODE_ENV !== "production" && (e.exposed && F("expose() should be called only once per setup()."), r != null)) {
        let s = typeof r;
        s === "object" && (Z(r) ? s = "array" : ve(r) && (s = "ref")), s !== "object" && F(`expose() should be passed a plain object, received ${s}.`);
      }
      e.exposed = r || {};
    };
    let n;
    return {}.NODE_ENV !== "production" ? Object.freeze({
      get attrs() {
        return n || (n = ma(e));
      },
      get slots() {
        return vr(e.slots);
      },
      get emit() {
        return (r, ...s) => e.emit(r, ...s);
      },
      expose: t
    }) : {
      get attrs() {
        return n || (n = ma(e));
      },
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
  }
  function Fi(e) {
    if (e.exposed)
      return e.exposeProxy || (e.exposeProxy = new Proxy(wl(Ot(e.exposed)), {
        get(t, n) {
          if (n in t)
            return t[n];
          if (n in Xn)
            return Xn[n](e);
        },
        has(t, n) {
          return n in t || n in Xn;
        }
      }));
  }
  const pp = /(?:^|[-_])(\w)/g, mp = (e) => e.replace(pp, (t) => t.toUpperCase()).replace(/[-_]/g, "");
  function fu(e, t = !0) {
    return ie(e) ? e.displayName || e.name : e.name || t && e.__name;
  }
  function ki(e, t, n = !1) {
    let r = fu(t);
    if (!r && t.__file) {
      const s = t.__file.match(/([^/\\]+)\.\w+$/);
      s && (r = s[1]);
    }
    if (!r && e && e.parent) {
      const s = (i) => {
        for (const o in i)
          if (i[o] === t)
            return o;
      };
      r = s(e.components || e.parent.type.components) || s(e.appContext.components);
    }
    return r ? mp(r) : n ? "App" : "Anonymous";
  }
  function cc(e) {
    return ie(e) && "__vccOpts" in e;
  }
  const B = (e, t) => Lf(e, t, as);
  function gp(e, t, n) {
    const r = arguments.length;
    return r === 2 ? ge(t) && !Z(t) ? Nr(t) ? pe(e, null, [t]) : pe(e, t) : pe(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Nr(n) && (n = [n]), pe(e, t, n));
  }
  const _p = Symbol({}.NODE_ENV !== "production" ? "ssrContext" : ""), yp = () => {
    {
      const e = Qn(_p);
      return e || {}.NODE_ENV !== "production" && F("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), e;
    }
  };
  function Xi(e) {
    return !!(e && e.__v_isShallow);
  }
  function Dp() {
    if ({}.NODE_ENV === "production" || typeof window > "u")
      return;
    const e = { style: "color:#3ba776" }, t = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, s = {
      header(c) {
        return ge(c) ? c.__isVue ? ["div", e, "VueInstance"] : ve(c) ? [
          "div",
          {},
          ["span", e, a(c)],
          "<",
          u(c.value),
          ">"
        ] : Bt(c) ? [
          "div",
          {},
          ["span", e, Xi(c) ? "ShallowReactive" : "Reactive"],
          "<",
          u(c),
          `>${On(c) ? " (readonly)" : ""}`
        ] : On(c) ? [
          "div",
          {},
          ["span", e, Xi(c) ? "ShallowReadonly" : "Readonly"],
          "<",
          u(c),
          ">"
        ] : null : null;
      },
      hasBody(c) {
        return c && c.__isVue;
      },
      body(c) {
        if (c && c.__isVue)
          return [
            "div",
            {},
            ...i(c.$)
          ];
      }
    };
    function i(c) {
      const f = [];
      c.type.props && c.props && f.push(o("props", re(c.props))), c.setupState !== be && f.push(o("setup", c.setupState)), c.data !== be && f.push(o("data", re(c.data)));
      const m = l(c, "computed");
      m && f.push(o("computed", m));
      const _ = l(c, "inject");
      return _ && f.push(o("injected", _)), f.push([
        "div",
        {},
        [
          "span",
          {
            style: r.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: c }]
      ]), f;
    }
    function o(c, f) {
      return f = Be({}, f), Object.keys(f).length ? [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          c
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(f).map((m) => [
            "div",
            {},
            ["span", r, m + ": "],
            u(f[m], !1)
          ])
        ]
      ] : ["span", {}];
    }
    function u(c, f = !0) {
      return typeof c == "number" ? ["span", t, c] : typeof c == "string" ? ["span", n, JSON.stringify(c)] : typeof c == "boolean" ? ["span", r, c] : ge(c) ? ["object", { object: f ? re(c) : c }] : ["span", n, String(c)];
    }
    function l(c, f) {
      const m = c.type;
      if (ie(m))
        return;
      const _ = {};
      for (const D in c.ctx)
        d(m, D, f) && (_[D] = c.ctx[D]);
      return _;
    }
    function d(c, f, m) {
      const _ = c[m];
      if (Z(_) && _.includes(f) || ge(_) && f in _ || c.extends && d(c.extends, f, m) || c.mixins && c.mixins.some((D) => d(D, f, m)))
        return !0;
    }
    function a(c) {
      return Xi(c) ? "ShallowRef" : c.effect ? "ComputedRef" : "Ref";
    }
    window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
  }
  const ga = "3.2.47", bp = "http://www.w3.org/2000/svg", Wn = typeof document < "u" ? document : null, _a = Wn && /* @__PURE__ */ Wn.createElement("template"), vp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, r) => {
      const s = t ? Wn.createElementNS(bp, e) : Wn.createElement(e, n ? { is: n } : void 0);
      return e === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
    },
    createText: (e) => Wn.createTextNode(e),
    createComment: (e) => Wn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Wn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(e, t, n, r, s, i) {
      const o = n ? n.previousSibling : t.lastChild;
      if (s && (s === i || s.nextSibling))
        for (; t.insertBefore(s.cloneNode(!0), n), !(s === i || !(s = s.nextSibling)); )
          ;
      else {
        _a.innerHTML = r ? `<svg>${e}</svg>` : e;
        const u = _a.content;
        if (r) {
          const l = u.firstChild;
          for (; l.firstChild; )
            u.appendChild(l.firstChild);
          u.removeChild(l);
        }
        t.insertBefore(u, n);
      }
      return [
        // first
        o ? o.nextSibling : t.firstChild,
        // last
        n ? n.previousSibling : t.lastChild
      ];
    }
  };
  function Ep(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
  }
  function wp(e, t, n) {
    const r = e.style, s = Oe(n);
    if (n && !s) {
      if (t && !Oe(t))
        for (const i in t)
          n[i] == null && Oo(r, i, "");
      for (const i in n)
        Oo(r, i, n[i]);
    } else {
      const i = r.display;
      s ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = i);
    }
  }
  const Cp = /[^\\];\s*$/, ya = /\s*!important$/;
  function Oo(e, t, n) {
    if (Z(n))
      n.forEach((r) => Oo(e, t, r));
    else if (n == null && (n = ""), {}.NODE_ENV !== "production" && Cp.test(n) && F(`Unexpected semicolon at the end of '${t}' style value: '${n}'`), t.startsWith("--"))
      e.setProperty(t, n);
    else {
      const r = xp(e, t);
      ya.test(n) ? e.setProperty(ln(r), n.replace(ya, ""), "important") : e[r] = n;
    }
  }
  const Da = ["Webkit", "Moz", "ms"], eo = {};
  function xp(e, t) {
    const n = eo[t];
    if (n)
      return n;
    let r = Ut(t);
    if (r !== "filter" && r in e)
      return eo[t] = r;
    r = rr(r);
    for (let s = 0; s < Da.length; s++) {
      const i = Da[s] + r;
      if (i in e)
        return eo[t] = i;
    }
    return t;
  }
  const ba = "http://www.w3.org/1999/xlink";
  function Ap(e, t, n, r, s) {
    if (r && t.startsWith("xlink:"))
      n == null ? e.removeAttributeNS(ba, t.slice(6, t.length)) : e.setAttributeNS(ba, t, n);
    else {
      const i = Gd(t);
      n == null || i && !Xa(n) ? e.removeAttribute(t) : e.setAttribute(t, i ? "" : n);
    }
  }
  function Fp(e, t, n, r, s, i, o) {
    if (t === "innerHTML" || t === "textContent") {
      r && o(r, s, i), e[t] = n ?? "";
      return;
    }
    if (t === "value" && e.tagName !== "PROGRESS" && // custom elements may use _value internally
    !e.tagName.includes("-")) {
      e._value = n;
      const l = n ?? "";
      (e.value !== l || // #4956: always set for OPTION elements because its value falls back to
      // textContent if no value attribute is present. And setting .value for
      // OPTION has no side effect
      e.tagName === "OPTION") && (e.value = l), n == null && e.removeAttribute(t);
      return;
    }
    let u = !1;
    if (n === "" || n == null) {
      const l = typeof e[t];
      l === "boolean" ? n = Xa(n) : n == null && l === "string" ? (n = "", u = !0) : l === "number" && (n = 0, u = !0);
    }
    try {
      e[t] = n;
    } catch (l) {
      ({}).NODE_ENV !== "production" && !u && F(`Failed setting prop "${t}" on <${e.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
    }
    u && e.removeAttribute(t);
  }
  function rn(e, t, n, r) {
    e.addEventListener(t, n, r);
  }
  function kp(e, t, n, r) {
    e.removeEventListener(t, n, r);
  }
  function Np(e, t, n, r, s = null) {
    const i = e._vei || (e._vei = {}), o = i[t];
    if (r && o)
      o.value = r;
    else {
      const [u, l] = Op(t);
      if (r) {
        const d = i[t] = Mp(r, s);
        rn(e, u, d, l);
      } else
        o && (kp(e, u, o, l), i[t] = void 0);
    }
  }
  const va = /(?:Once|Passive|Capture)$/;
  function Op(e) {
    let t;
    if (va.test(e)) {
      t = {};
      let r;
      for (; r = e.match(va); )
        e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0;
    }
    return [e[2] === ":" ? e.slice(3) : ln(e.slice(2)), t];
  }
  let to = 0;
  const Sp = /* @__PURE__ */ Promise.resolve(), Tp = () => to || (Sp.then(() => to = 0), to = Date.now());
  function Mp(e, t) {
    const n = (r) => {
      if (!r._vts)
        r._vts = Date.now();
      else if (r._vts <= n.attached)
        return;
      Ct(Bp(r, n.value), t, 5, [r]);
    };
    return n.value = e, n.attached = Tp(), n;
  }
  function Bp(e, t) {
    if (Z(t)) {
      const n = e.stopImmediatePropagation;
      return e.stopImmediatePropagation = () => {
        n.call(e), e._stopped = !0;
      }, t.map((r) => (s) => !s._stopped && r && r(s));
    } else
      return t;
  }
  const Ea = /^on[a-z]/, Ip = (e, t, n, r, s = !1, i, o, u, l) => {
    t === "class" ? Ep(e, r, s) : t === "style" ? wp(e, n, r) : hs(t) ? Js(t) || Np(e, t, n, r, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Pp(e, t, r, s)) ? Fp(e, t, r, i, o, u, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Ap(e, t, r, s));
  };
  function Pp(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && Ea.test(t) && ie(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || Ea.test(t) && Oe(n) ? !1 : t in e;
  }
  function hu(e) {
    const t = Ai();
    if (!t) {
      ({}).NODE_ENV !== "production" && F("useCssVars is called without current active component instance.");
      return;
    }
    const n = t.ut = (s = e(t.proxy)) => {
      Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((i) => To(i, s));
    }, r = () => {
      const s = e(t.proxy);
      So(t.subTree, s), n(s);
    };
    _h(r), xt(() => {
      const s = new MutationObserver(r);
      s.observe(t.subTree.el.parentNode, { childList: !0 }), Br(() => s.disconnect());
    });
  }
  function So(e, t) {
    if (e.shapeFlag & 128) {
      const n = e.suspense;
      e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
        So(n.activeBranch, t);
      });
    }
    for (; e.component; )
      e = e.component.subTree;
    if (e.shapeFlag & 1 && e.el)
      To(e.el, t);
    else if (e.type === Pe)
      e.children.forEach((n) => So(n, t));
    else if (e.type === Jr) {
      let { el: n, anchor: r } = e;
      for (; n && (To(n, t), n !== r); )
        n = n.nextSibling;
    }
  }
  function To(e, t) {
    if (e.nodeType === 1) {
      const n = e.style;
      for (const r in t)
        n.setProperty(`--${r}`, t[r]);
    }
  }
  const Dn = "transition", jr = "animation", pu = (e, { slots: t }) => gp(Rl, Vp(e), t);
  pu.displayName = "Transition";
  const dc = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  pu.props = /* @__PURE__ */ Be({}, Rl.props, dc);
  const Vn = (e, t = []) => {
    Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  }, wa = (e) => e ? Z(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
  function Vp(e) {
    const t = {};
    for (const w in e)
      w in dc || (t[w] = e[w]);
    if (e.css === !1)
      return t;
    const { name: n = "v", type: r, duration: s, enterFromClass: i = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: u = `${n}-enter-to`, appearFromClass: l = i, appearActiveClass: d = o, appearToClass: a = u, leaveFromClass: c = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: m = `${n}-leave-to` } = e, _ = $p(s), D = _ && _[0], S = _ && _[1], { onBeforeEnter: I, onEnter: P, onEnterCancelled: $, onLeave: L, onLeaveCancelled: z, onBeforeAppear: fe = I, onAppear: j = P, onAppearCancelled: A = $ } = t, g = (w, ue, ke) => {
      $n(w, ue ? a : u), $n(w, ue ? d : o), ke && ke();
    }, b = (w, ue) => {
      w._isLeaving = !1, $n(w, c), $n(w, m), $n(w, f), ue && ue();
    }, H = (w) => (ue, ke) => {
      const K = w ? j : P, ee = () => g(ue, w, ke);
      Vn(K, [ue, ee]), Ca(() => {
        $n(ue, w ? l : i), bn(ue, w ? a : u), wa(K) || xa(ue, r, D, ee);
      });
    };
    return Be(t, {
      onBeforeEnter(w) {
        Vn(I, [w]), bn(w, i), bn(w, o);
      },
      onBeforeAppear(w) {
        Vn(fe, [w]), bn(w, l), bn(w, d);
      },
      onEnter: H(!1),
      onAppear: H(!0),
      onLeave(w, ue) {
        w._isLeaving = !0;
        const ke = () => b(w, ue);
        bn(w, c), jp(), bn(w, f), Ca(() => {
          w._isLeaving && ($n(w, c), bn(w, m), wa(L) || xa(w, r, S, ke));
        }), Vn(L, [w, ke]);
      },
      onEnterCancelled(w) {
        g(w, !1), Vn($, [w]);
      },
      onAppearCancelled(w) {
        g(w, !0), Vn(A, [w]);
      },
      onLeaveCancelled(w) {
        b(w), Vn(z, [w]);
      }
    });
  }
  function $p(e) {
    if (e == null)
      return null;
    if (ge(e))
      return [no(e.enter), no(e.leave)];
    {
      const t = no(e);
      return [t, t];
    }
  }
  function no(e) {
    const t = nf(e);
    return {}.NODE_ENV !== "production" && Uf(t, "<transition> explicit duration"), t;
  }
  function bn(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e._vtc || (e._vtc = /* @__PURE__ */ new Set())).add(t);
  }
  function $n(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.remove(r));
    const { _vtc: n } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0));
  }
  function Ca(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e);
    });
  }
  let Rp = 0;
  function xa(e, t, n, r) {
    const s = e._endId = ++Rp, i = () => {
      s === e._endId && r();
    };
    if (n)
      return setTimeout(i, n);
    const { type: o, timeout: u, propCount: l } = Lp(e, t);
    if (!o)
      return r();
    const d = o + "end";
    let a = 0;
    const c = () => {
      e.removeEventListener(d, f), i();
    }, f = (m) => {
      m.target === e && ++a >= l && c();
    };
    setTimeout(() => {
      a < l && c();
    }, u + 1), e.addEventListener(d, f);
  }
  function Lp(e, t) {
    const n = window.getComputedStyle(e), r = (_) => (n[_] || "").split(", "), s = r(`${Dn}Delay`), i = r(`${Dn}Duration`), o = Aa(s, i), u = r(`${jr}Delay`), l = r(`${jr}Duration`), d = Aa(u, l);
    let a = null, c = 0, f = 0;
    t === Dn ? o > 0 && (a = Dn, c = o, f = i.length) : t === jr ? d > 0 && (a = jr, c = d, f = l.length) : (c = Math.max(o, d), a = c > 0 ? o > d ? Dn : jr : null, f = a ? a === Dn ? i.length : l.length : 0);
    const m = a === Dn && /\b(transform|all)(,|$)/.test(r(`${Dn}Property`).toString());
    return {
      type: a,
      timeout: c,
      propCount: f,
      hasTransform: m
    };
  }
  function Aa(e, t) {
    for (; e.length < t.length; )
      e = e.concat(e);
    return Math.max(...t.map((n, r) => Fa(n) + Fa(e[r])));
  }
  function Fa(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function jp() {
    return document.body.offsetHeight;
  }
  const Sn = (e) => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return Z(t) ? (n) => _r(t, n) : t;
  };
  function Yp(e) {
    e.target.composing = !0;
  }
  function ka(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
  }
  const Na = {
    created(e, { modifiers: { lazy: t, trim: n, number: r } }, s) {
      e._assign = Sn(s);
      const i = r || s.props && s.props.type === "number";
      rn(e, t ? "change" : "input", (o) => {
        if (o.target.composing)
          return;
        let u = e.value;
        n && (u = u.trim()), i && (u = Qs(u)), e._assign(u);
      }), n && rn(e, "change", () => {
        e.value = e.value.trim();
      }), t || (rn(e, "compositionstart", Yp), rn(e, "compositionend", ka), rn(e, "change", ka));
    },
    // set value on mounted so it's after min/max for type="range"
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(e, { value: t, modifiers: { lazy: n, trim: r, number: s } }, i) {
      if (e._assign = Sn(i), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (s || e.type === "number") && Qs(e.value) === t))
        return;
      const o = t ?? "";
      e.value !== o && (e.value = o);
    }
  }, fc = {
    // #4096 array checkboxes need to be deep traversed
    deep: !0,
    created(e, t, n) {
      e._assign = Sn(n), rn(e, "change", () => {
        const r = e._modelValue, s = Sr(e), i = e.checked, o = e._assign;
        if (Z(r)) {
          const u = qo(r, s), l = u !== -1;
          if (i && !l)
            o(r.concat(s));
          else if (!i && l) {
            const d = [...r];
            d.splice(u, 1), o(d);
          }
        } else if (Mr(r)) {
          const u = new Set(r);
          i ? u.add(s) : u.delete(s), o(u);
        } else
          o(hc(e, i));
      });
    },
    // set initial checked on mount to wait for true-value/false-value
    mounted: Oa,
    beforeUpdate(e, t, n) {
      e._assign = Sn(n), Oa(e, t, n);
    }
  };
  function Oa(e, { value: t, oldValue: n }, r) {
    e._modelValue = t, Z(t) ? e.checked = qo(t, r.props.value) > -1 : Mr(t) ? e.checked = t.has(r.props.value) : t !== n && (e.checked = nr(t, hc(e, !0)));
  }
  const Hp = {
    created(e, { value: t }, n) {
      e.checked = nr(t, n.props.value), e._assign = Sn(n), rn(e, "change", () => {
        e._assign(Sr(e));
      });
    },
    beforeUpdate(e, { value: t, oldValue: n }, r) {
      e._assign = Sn(r), t !== n && (e.checked = nr(t, r.props.value));
    }
  }, Wp = {
    // <select multiple> value need to be deep traversed
    deep: !0,
    created(e, { value: t, modifiers: { number: n } }, r) {
      const s = Mr(t);
      rn(e, "change", () => {
        const i = Array.prototype.filter.call(e.options, (o) => o.selected).map((o) => n ? Qs(Sr(o)) : Sr(o));
        e._assign(e.multiple ? s ? new Set(i) : i : i[0]);
      }), e._assign = Sn(r);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(e, { value: t }) {
      Sa(e, t);
    },
    beforeUpdate(e, t, n) {
      e._assign = Sn(n);
    },
    updated(e, { value: t }) {
      Sa(e, t);
    }
  };
  function Sa(e, t) {
    const n = e.multiple;
    if (n && !Z(t) && !Mr(t)) {
      ({}).NODE_ENV !== "production" && F(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`);
      return;
    }
    for (let r = 0, s = e.options.length; r < s; r++) {
      const i = e.options[r], o = Sr(i);
      if (n)
        Z(t) ? i.selected = qo(t, o) > -1 : i.selected = t.has(o);
      else if (nr(Sr(i), t)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
  function Sr(e) {
    return "_value" in e ? e._value : e.value;
  }
  function hc(e, t) {
    const n = t ? "_trueValue" : "_falseValue";
    return n in e ? e[n] : t;
  }
  const Up = {
    created(e, t, n) {
      Bs(e, t, n, null, "created");
    },
    mounted(e, t, n) {
      Bs(e, t, n, null, "mounted");
    },
    beforeUpdate(e, t, n, r) {
      Bs(e, t, n, r, "beforeUpdate");
    },
    updated(e, t, n, r) {
      Bs(e, t, n, r, "updated");
    }
  };
  function zp(e, t) {
    switch (e) {
      case "SELECT":
        return Wp;
      case "TEXTAREA":
        return Na;
      default:
        switch (t) {
          case "checkbox":
            return fc;
          case "radio":
            return Hp;
          default:
            return Na;
        }
    }
  }
  function Bs(e, t, n, r, s) {
    const o = zp(e.tagName, n.props && n.props.type)[s];
    o && o(e, t, n, r);
  }
  const qp = ["ctrl", "shift", "alt", "meta"], Kp = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => qp.some((n) => e[`${n}Key`] && !t.includes(n))
  }, mu = (e, t) => (n, ...r) => {
    for (let s = 0; s < t.length; s++) {
      const i = Kp[t[s]];
      if (i && i(n, t))
        return;
    }
    return e(n, ...r);
  }, Gp = {
    esc: "escape",
    space: " ",
    up: "arrow-up",
    left: "arrow-left",
    right: "arrow-right",
    down: "arrow-down",
    delete: "backspace"
  }, Tr = (e, t) => (n) => {
    if (!("key" in n))
      return;
    const r = ln(n.key);
    if (t.some((s) => s === r || Gp[s] === r))
      return e(n);
  }, Jp = {
    beforeMount(e, { value: t }, { transition: n }) {
      e._vod = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Yr(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: r }) {
      !t != !n && (r ? t ? (r.beforeEnter(e), Yr(e, !0), r.enter(e)) : r.leave(e, () => {
        Yr(e, !1);
      }) : Yr(e, t));
    },
    beforeUnmount(e, { value: t }) {
      Yr(e, t);
    }
  };
  function Yr(e, t) {
    e.style.display = t ? e._vod : "none";
  }
  const Zp = /* @__PURE__ */ Be({ patchProp: Ip }, vp);
  let Ta;
  function Qp() {
    return Ta || (Ta = Xh(Zp));
  }
  const Xp = (...e) => {
    const t = Qp().createApp(...e);
    ({}).NODE_ENV !== "production" && (e0(t), t0(t));
    const { mount: n } = t;
    return t.mount = (r) => {
      const s = n0(r);
      if (!s)
        return;
      const i = t._component;
      !ie(i) && !i.render && !i.template && (i.template = s.innerHTML), s.innerHTML = "";
      const o = n(s, !1, s instanceof SVGElement);
      return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), o;
    }, t;
  };
  function e0(e) {
    Object.defineProperty(e.config, "isNativeTag", {
      value: (t) => zd(t) || qd(t),
      writable: !1
    });
  }
  function t0(e) {
    {
      const t = e.config.isCustomElement;
      Object.defineProperty(e.config, "isCustomElement", {
        get() {
          return t;
        },
        set() {
          F("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
        }
      });
      const n = e.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
      Object.defineProperty(e.config, "compilerOptions", {
        get() {
          return F(r), n;
        },
        set() {
          F(r);
        }
      });
    }
  }
  function n0(e) {
    if (Oe(e)) {
      const t = document.querySelector(e);
      return {}.NODE_ENV !== "production" && !t && F(`Failed to mount app: mount target selector "${e}" returned null.`), t;
    }
    return {}.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && F('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), e;
  }
  function r0() {
    Dp();
  }
  ({}).NODE_ENV !== "production" && r0();
  var pc = !1;
  function Is(e, t, n) {
    return Array.isArray(e) ? (e.length = Math.max(e.length, t), e.splice(t, 1, n), n) : (e[t] = n, n);
  }
  function ro(e, t) {
    if (Array.isArray(e)) {
      e.splice(t, 1);
      return;
    }
    delete e[t];
  }
  function s0() {
    return mc().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function mc() {
    return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
  }
  const i0 = typeof Proxy == "function", o0 = "devtools-plugin:setup", u0 = "plugin:settings:set";
  let hr, Mo;
  function a0() {
    var e;
    return hr !== void 0 || (typeof window < "u" && window.performance ? (hr = !0, Mo = window.performance) : typeof global < "u" && (!((e = global.perf_hooks) === null || e === void 0) && e.performance) ? (hr = !0, Mo = global.perf_hooks.performance) : hr = !1), hr;
  }
  function l0() {
    return a0() ? Mo.now() : Date.now();
  }
  class c0 {
    constructor(t, n) {
      this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
      const r = {};
      if (t.settings)
        for (const o in t.settings) {
          const u = t.settings[o];
          r[o] = u.defaultValue;
        }
      const s = `__vue-devtools-plugin-settings__${t.id}`;
      let i = Object.assign({}, r);
      try {
        const o = localStorage.getItem(s), u = JSON.parse(o);
        Object.assign(i, u);
      } catch {
      }
      this.fallbacks = {
        getSettings() {
          return i;
        },
        setSettings(o) {
          try {
            localStorage.setItem(s, JSON.stringify(o));
          } catch {
          }
          i = o;
        },
        now() {
          return l0();
        }
      }, n && n.on(u0, (o, u) => {
        o === this.plugin.id && this.fallbacks.setSettings(u);
      }), this.proxiedOn = new Proxy({}, {
        get: (o, u) => this.target ? this.target.on[u] : (...l) => {
          this.onQueue.push({
            method: u,
            args: l
          });
        }
      }), this.proxiedTarget = new Proxy({}, {
        get: (o, u) => this.target ? this.target[u] : u === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(u) ? (...l) => (this.targetQueue.push({
          method: u,
          args: l,
          resolve: () => {
          }
        }), this.fallbacks[u](...l)) : (...l) => new Promise((d) => {
          this.targetQueue.push({
            method: u,
            args: l,
            resolve: d
          });
        })
      });
    }
    async setRealTarget(t) {
      this.target = t;
      for (const n of this.onQueue)
        this.target.on[n.method](...n.args);
      for (const n of this.targetQueue)
        n.resolve(await this.target[n.method](...n.args));
    }
  }
  function gc(e, t) {
    const n = e, r = mc(), s = s0(), i = i0 && n.enableEarlyProxy;
    if (s && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !i))
      s.emit(o0, e, t);
    else {
      const o = i ? new c0(n, s) : null;
      (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
        pluginDescriptor: n,
        setupFn: t,
        proxy: o
      }), o && t(o.proxiedTarget);
    }
  }
  /*!
    * pinia v2.0.33
    * (c) 2023 Eduardo San Martin Morote
    * @license MIT
    */
  let qr;
  const ls = (e) => qr = e, _c = {}.NODE_ENV !== "production" ? Symbol("pinia") : (
    /* istanbul ignore next */
    Symbol()
  );
  function or(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
  }
  var Wt;
  (function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
  })(Wt || (Wt = {}));
  const Ni = typeof window < "u", Qr = ({}.NODE_ENV !== "production" || !1) && {}.NODE_ENV !== "test" && Ni, Ma = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
  function d0(e, { autoBom: t = !1 } = {}) {
    return t && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type) ? new Blob([String.fromCharCode(65279), e], { type: e.type }) : e;
  }
  function gu(e, t, n) {
    const r = new XMLHttpRequest();
    r.open("GET", e), r.responseType = "blob", r.onload = function() {
      bc(r.response, t, n);
    }, r.onerror = function() {
      console.error("could not download file");
    }, r.send();
  }
  function yc(e) {
    const t = new XMLHttpRequest();
    t.open("HEAD", e, !1);
    try {
      t.send();
    } catch {
    }
    return t.status >= 200 && t.status <= 299;
  }
  function Hs(e) {
    try {
      e.dispatchEvent(new MouseEvent("click"));
    } catch {
      const n = document.createEvent("MouseEvents");
      n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), e.dispatchEvent(n);
    }
  }
  const Ws = typeof navigator == "object" ? navigator : { userAgent: "" }, Dc = /* @__PURE__ */ (() => /Macintosh/.test(Ws.userAgent) && /AppleWebKit/.test(Ws.userAgent) && !/Safari/.test(Ws.userAgent))(), bc = Ni ? (
    // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
    typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Dc ? f0 : (
      // Use msSaveOrOpenBlob as a second approach
      "msSaveOrOpenBlob" in Ws ? h0 : (
        // Fallback to using FileReader and a popup
        p0
      )
    )
  ) : () => {
  };
  function f0(e, t = "download", n) {
    const r = document.createElement("a");
    r.download = t, r.rel = "noopener", typeof e == "string" ? (r.href = e, r.origin !== location.origin ? yc(r.href) ? gu(e, t, n) : (r.target = "_blank", Hs(r)) : Hs(r)) : (r.href = URL.createObjectURL(e), setTimeout(function() {
      URL.revokeObjectURL(r.href);
    }, 4e4), setTimeout(function() {
      Hs(r);
    }, 0));
  }
  function h0(e, t = "download", n) {
    if (typeof e == "string")
      if (yc(e))
        gu(e, t, n);
      else {
        const r = document.createElement("a");
        r.href = e, r.target = "_blank", setTimeout(function() {
          Hs(r);
        });
      }
    else
      navigator.msSaveOrOpenBlob(d0(e, n), t);
  }
  function p0(e, t, n, r) {
    if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof e == "string")
      return gu(e, t, n);
    const s = e.type === "application/octet-stream", i = /constructor/i.test(String(Ma.HTMLElement)) || "safari" in Ma, o = /CriOS\/[\d]+/.test(navigator.userAgent);
    if ((o || s && i || Dc) && typeof FileReader < "u") {
      const u = new FileReader();
      u.onloadend = function() {
        let l = u.result;
        if (typeof l != "string")
          throw r = null, new Error("Wrong reader.result type");
        l = o ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
      }, u.readAsDataURL(e);
    } else {
      const u = URL.createObjectURL(e);
      r ? r.location.assign(u) : location.href = u, r = null, setTimeout(function() {
        URL.revokeObjectURL(u);
      }, 4e4);
    }
  }
  function Ue(e, t) {
    const n = "🍍 " + e;
    typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, t) : t === "error" ? console.error(n) : t === "warn" ? console.warn(n) : console.log(n);
  }
  function _u(e) {
    return "_a" in e && "install" in e;
  }
  function vc() {
    if (!("clipboard" in navigator))
      return Ue("Your browser doesn't support the Clipboard API", "error"), !0;
  }
  function Ec(e) {
    return e instanceof Error && e.message.toLowerCase().includes("document is not focused") ? (Ue('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
  }
  async function m0(e) {
    if (!vc())
      try {
        await navigator.clipboard.writeText(JSON.stringify(e.state.value)), Ue("Global state copied to clipboard.");
      } catch (t) {
        if (Ec(t))
          return;
        Ue("Failed to serialize the state. Check the console for more details.", "error"), console.error(t);
      }
  }
  async function g0(e) {
    if (!vc())
      try {
        e.state.value = JSON.parse(await navigator.clipboard.readText()), Ue("Global state pasted from clipboard.");
      } catch (t) {
        if (Ec(t))
          return;
        Ue("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(t);
      }
  }
  async function _0(e) {
    try {
      bc(new Blob([JSON.stringify(e.state.value)], {
        type: "text/plain;charset=utf-8"
      }), "pinia-state.json");
    } catch (t) {
      Ue("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
    }
  }
  let Qt;
  function y0() {
    Qt || (Qt = document.createElement("input"), Qt.type = "file", Qt.accept = ".json");
    function e() {
      return new Promise((t, n) => {
        Qt.onchange = async () => {
          const r = Qt.files;
          if (!r)
            return t(null);
          const s = r.item(0);
          return t(s ? { text: await s.text(), file: s } : null);
        }, Qt.oncancel = () => t(null), Qt.onerror = n, Qt.click();
      });
    }
    return e;
  }
  async function D0(e) {
    try {
      const n = await (await y0())();
      if (!n)
        return;
      const { text: r, file: s } = n;
      e.state.value = JSON.parse(r), Ue(`Global state imported from "${s.name}".`);
    } catch (t) {
      Ue("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(t);
    }
  }
  function Nt(e) {
    return {
      _custom: {
        display: e
      }
    };
  }
  const wc = "🍍 Pinia (root)", Bo = "_root";
  function b0(e) {
    return _u(e) ? {
      id: Bo,
      label: wc
    } : {
      id: e.$id,
      label: e.$id
    };
  }
  function v0(e) {
    if (_u(e)) {
      const n = Array.from(e._s.keys()), r = e._s;
      return {
        state: n.map((i) => ({
          editable: !0,
          key: i,
          value: e.state.value[i]
        })),
        getters: n.filter((i) => r.get(i)._getters).map((i) => {
          const o = r.get(i);
          return {
            editable: !1,
            key: i,
            value: o._getters.reduce((u, l) => (u[l] = o[l], u), {})
          };
        })
      };
    }
    const t = {
      state: Object.keys(e.$state).map((n) => ({
        editable: !0,
        key: n,
        value: e.$state[n]
      }))
    };
    return e._getters && e._getters.length && (t.getters = e._getters.map((n) => ({
      editable: !1,
      key: n,
      value: e[n]
    }))), e._customProperties.size && (t.customProperties = Array.from(e._customProperties).map((n) => ({
      editable: !0,
      key: n,
      value: e[n]
    }))), t;
  }
  function E0(e) {
    return e ? Array.isArray(e) ? e.reduce((t, n) => (t.keys.push(n.key), t.operations.push(n.type), t.oldValue[n.key] = n.oldValue, t.newValue[n.key] = n.newValue, t), {
      oldValue: {},
      keys: [],
      operations: [],
      newValue: {}
    }) : {
      operation: Nt(e.type),
      key: Nt(e.key),
      oldValue: e.oldValue,
      newValue: e.newValue
    } : {};
  }
  function w0(e) {
    switch (e) {
      case Wt.direct:
        return "mutation";
      case Wt.patchFunction:
        return "$patch";
      case Wt.patchObject:
        return "$patch";
      default:
        return "unknown";
    }
  }
  let Er = !0;
  const Us = [], Yn = "pinia:mutations", Je = "pinia", { assign: C0 } = Object, ai = (e) => "🍍 " + e;
  function x0(e, t) {
    gc({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes: Us,
      app: e
    }, (n) => {
      typeof n.now != "function" && Ue("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
        id: Yn,
        label: "Pinia 🍍",
        color: 15064968
      }), n.addInspector({
        id: Je,
        label: "Pinia 🍍",
        icon: "storage",
        treeFilterPlaceholder: "Search stores",
        actions: [
          {
            icon: "content_copy",
            action: () => {
              m0(t);
            },
            tooltip: "Serialize and copy the state"
          },
          {
            icon: "content_paste",
            action: async () => {
              await g0(t), n.sendInspectorTree(Je), n.sendInspectorState(Je);
            },
            tooltip: "Replace the state with the content of your clipboard"
          },
          {
            icon: "save",
            action: () => {
              _0(t);
            },
            tooltip: "Save the state as a JSON file"
          },
          {
            icon: "folder_open",
            action: async () => {
              await D0(t), n.sendInspectorTree(Je), n.sendInspectorState(Je);
            },
            tooltip: "Import the state from a JSON file"
          }
        ],
        nodeActions: [
          {
            icon: "restore",
            tooltip: "Reset the state (option store only)",
            action: (r) => {
              const s = t._s.get(r);
              s ? s._isOptionsAPI ? (s.$reset(), Ue(`Store "${r}" reset.`)) : Ue(`Cannot reset "${r}" store because it's a setup store.`, "warn") : Ue(`Cannot reset "${r}" store because it wasn't found.`, "warn");
            }
          }
        ]
      }), n.on.inspectComponent((r, s) => {
        const i = r.componentInstance && r.componentInstance.proxy;
        if (i && i._pStores) {
          const o = r.componentInstance.proxy._pStores;
          Object.values(o).forEach((u) => {
            r.instanceData.state.push({
              type: ai(u.$id),
              key: "state",
              editable: !0,
              value: u._isOptionsAPI ? {
                _custom: {
                  value: re(u.$state),
                  actions: [
                    {
                      icon: "restore",
                      tooltip: "Reset the state of this store",
                      action: () => u.$reset()
                    }
                  ]
                }
              } : (
                // NOTE: workaround to unwrap transferred refs
                Object.keys(u.$state).reduce((l, d) => (l[d] = u.$state[d], l), {})
              )
            }), u._getters && u._getters.length && r.instanceData.state.push({
              type: ai(u.$id),
              key: "getters",
              editable: !1,
              value: u._getters.reduce((l, d) => {
                try {
                  l[d] = u[d];
                } catch (a) {
                  l[d] = a;
                }
                return l;
              }, {})
            });
          });
        }
      }), n.on.getInspectorTree((r) => {
        if (r.app === e && r.inspectorId === Je) {
          let s = [t];
          s = s.concat(Array.from(t._s.values())), r.rootNodes = (r.filter ? s.filter((i) => "$id" in i ? i.$id.toLowerCase().includes(r.filter.toLowerCase()) : wc.toLowerCase().includes(r.filter.toLowerCase())) : s).map(b0);
        }
      }), n.on.getInspectorState((r) => {
        if (r.app === e && r.inspectorId === Je) {
          const s = r.nodeId === Bo ? t : t._s.get(r.nodeId);
          if (!s)
            return;
          s && (r.state = v0(s));
        }
      }), n.on.editInspectorState((r, s) => {
        if (r.app === e && r.inspectorId === Je) {
          const i = r.nodeId === Bo ? t : t._s.get(r.nodeId);
          if (!i)
            return Ue(`store "${r.nodeId}" not found`, "error");
          const { path: o } = r;
          _u(i) ? o.unshift("state") : (o.length !== 1 || !i._customProperties.has(o[0]) || o[0] in i.$state) && o.unshift("$state"), Er = !1, r.set(i, o, r.state.value), Er = !0;
        }
      }), n.on.editComponentState((r) => {
        if (r.type.startsWith("🍍")) {
          const s = r.type.replace(/^🍍\s*/, ""), i = t._s.get(s);
          if (!i)
            return Ue(`store "${s}" not found`, "error");
          const { path: o } = r;
          if (o[0] !== "state")
            return Ue(`Invalid path for store "${s}":
${o}
Only state can be modified.`);
          o[0] = "$state", Er = !1, r.set(i, o, r.state.value), Er = !0;
        }
      });
    });
  }
  function A0(e, t) {
    Us.includes(ai(t.$id)) || Us.push(ai(t.$id)), gc({
      id: "dev.esm.pinia",
      label: "Pinia 🍍",
      logo: "https://pinia.vuejs.org/logo.svg",
      packageName: "pinia",
      homepage: "https://pinia.vuejs.org",
      componentStateTypes: Us,
      app: e,
      settings: {
        logStoreChanges: {
          label: "Notify about new/deleted stores",
          type: "boolean",
          defaultValue: !0
        }
        // useEmojis: {
        //   label: 'Use emojis in messages ⚡️',
        //   type: 'boolean',
        //   defaultValue: true,
        // },
      }
    }, (n) => {
      const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
      t.$onAction(({ after: o, onError: u, name: l, args: d }) => {
        const a = Cc++;
        n.addTimelineEvent({
          layerId: Yn,
          event: {
            time: r(),
            title: "🛫 " + l,
            subtitle: "start",
            data: {
              store: Nt(t.$id),
              action: Nt(l),
              args: d
            },
            groupId: a
          }
        }), o((c) => {
          Un = void 0, n.addTimelineEvent({
            layerId: Yn,
            event: {
              time: r(),
              title: "🛬 " + l,
              subtitle: "end",
              data: {
                store: Nt(t.$id),
                action: Nt(l),
                args: d,
                result: c
              },
              groupId: a
            }
          });
        }), u((c) => {
          Un = void 0, n.addTimelineEvent({
            layerId: Yn,
            event: {
              time: r(),
              logType: "error",
              title: "💥 " + l,
              subtitle: "end",
              data: {
                store: Nt(t.$id),
                action: Nt(l),
                args: d,
                error: c
              },
              groupId: a
            }
          });
        });
      }, !0), t._customProperties.forEach((o) => {
        Qe(() => xe(t[o]), (u, l) => {
          n.notifyComponentUpdate(), n.sendInspectorState(Je), Er && n.addTimelineEvent({
            layerId: Yn,
            event: {
              time: r(),
              title: "Change",
              subtitle: o,
              data: {
                newValue: u,
                oldValue: l
              },
              groupId: Un
            }
          });
        }, { deep: !0 });
      }), t.$subscribe(({ events: o, type: u }, l) => {
        if (n.notifyComponentUpdate(), n.sendInspectorState(Je), !Er)
          return;
        const d = {
          time: r(),
          title: w0(u),
          data: C0({ store: Nt(t.$id) }, E0(o)),
          groupId: Un
        };
        Un = void 0, u === Wt.patchFunction ? d.subtitle = "⤵️" : u === Wt.patchObject ? d.subtitle = "🧩" : o && !Array.isArray(o) && (d.subtitle = o.type), o && (d.data["rawEvent(s)"] = {
          _custom: {
            display: "DebuggerEvent",
            type: "object",
            tooltip: "raw DebuggerEvent[]",
            value: o
          }
        }), n.addTimelineEvent({
          layerId: Yn,
          event: d
        });
      }, { detached: !0, flush: "sync" });
      const s = t._hotUpdate;
      t._hotUpdate = Ot((o) => {
        s(o), n.addTimelineEvent({
          layerId: Yn,
          event: {
            time: r(),
            title: "🔥 " + t.$id,
            subtitle: "HMR update",
            data: {
              store: Nt(t.$id),
              info: Nt("HMR update")
            }
          }
        }), n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je);
      });
      const { $dispose: i } = t;
      t.$dispose = () => {
        i(), n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je), n.getSettings().logStoreChanges && Ue(`Disposed "${t.$id}" store 🗑`);
      }, n.notifyComponentUpdate(), n.sendInspectorTree(Je), n.sendInspectorState(Je), n.getSettings().logStoreChanges && Ue(`"${t.$id}" store installed 🆕`);
    });
  }
  let Cc = 0, Un;
  function Ba(e, t) {
    const n = t.reduce((r, s) => (r[s] = re(e)[s], r), {});
    for (const r in n)
      e[r] = function() {
        const s = Cc, i = new Proxy(e, {
          get(...o) {
            return Un = s, Reflect.get(...o);
          },
          set(...o) {
            return Un = s, Reflect.set(...o);
          }
        });
        return n[r].apply(i, arguments);
      };
  }
  function F0({ app: e, store: t, options: n }) {
    if (!t.$id.startsWith("__hot:")) {
      if (n.state && (t._isOptionsAPI = !0), typeof n.state == "function") {
        Ba(
          // @ts-expect-error: can cast the store...
          t,
          Object.keys(n.actions)
        );
        const r = t._hotUpdate;
        re(t)._hotUpdate = function(s) {
          r.apply(this, arguments), Ba(t, Object.keys(s._hmrPayload.actions));
        };
      }
      A0(
        e,
        // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
        t
      );
    }
  }
  function k0() {
    const e = ol(!0), t = e.run(() => G({}));
    let n = [], r = [];
    const s = Ot({
      install(i) {
        ls(s), s._a = i, i.provide(_c, s), i.config.globalProperties.$pinia = s, Qr && x0(i, s), r.forEach((o) => n.push(o)), r = [];
      },
      use(i) {
        return !this._a && !pc ? r.push(i) : n.push(i), this;
      },
      _p: n,
      // it's actually undefined here
      // @ts-expect-error
      _a: null,
      _e: e,
      _s: /* @__PURE__ */ new Map(),
      state: t
    });
    return Qr && typeof Proxy < "u" && s.use(F0), s;
  }
  function xc(e, t) {
    for (const n in t) {
      const r = t[n];
      if (!(n in e))
        continue;
      const s = e[n];
      or(s) && or(r) && !ve(r) && !Bt(r) ? e[n] = xc(s, r) : e[n] = r;
    }
    return e;
  }
  const Ac = () => {
  };
  function Ia(e, t, n, r = Ac) {
    e.push(t);
    const s = () => {
      const i = e.indexOf(t);
      i > -1 && (e.splice(i, 1), r());
    };
    return !n && ul() && sf(s), s;
  }
  function pr(e, ...t) {
    e.slice().forEach((n) => {
      n(...t);
    });
  }
  function Io(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
      if (!t.hasOwnProperty(n))
        continue;
      const r = t[n], s = e[n];
      or(s) && or(r) && e.hasOwnProperty(n) && !ve(r) && !Bt(r) ? e[n] = Io(s, r) : e[n] = r;
    }
    return e;
  }
  const N0 = {}.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
    /* istanbul ignore next */
    Symbol()
  );
  function O0(e) {
    return !or(e) || !e.hasOwnProperty(N0);
  }
  const { assign: Et } = Object;
  function Pa(e) {
    return !!(ve(e) && e.effect);
  }
  function Va(e, t, n, r) {
    const { state: s, actions: i, getters: o } = t, u = n.state.value[e];
    let l;
    function d() {
      !u && ({}.NODE_ENV === "production" || !r) && (n.state.value[e] = s ? s() : {});
      const a = {}.NODE_ENV !== "production" && r ? (
        // use ref() to unwrap refs inside state TODO: check if this is still necessary
        mo(G(s ? s() : {}).value)
      ) : mo(n.state.value[e]);
      return Et(a, i, Object.keys(o || {}).reduce((c, f) => ({}.NODE_ENV !== "production" && f in a && console.warn(`[🍍]: A getter cannot have the same name as another state property. Rename one of them. Found with "${f}" in store "${e}".`), c[f] = Ot(B(() => {
        ls(n);
        const m = n._s.get(e);
        return o[f].call(m, m);
      })), c), {}));
    }
    return l = Po(e, d, t, n, r, !0), l;
  }
  function Po(e, t, n = {}, r, s, i) {
    let o;
    const u = Et({ actions: {} }, n);
    if ({}.NODE_ENV !== "production" && !r._e.active)
      throw new Error("Pinia destroyed");
    const l = {
      deep: !0
      // flush: 'post',
    };
    ({}).NODE_ENV !== "production" && !pc && (l.onTrigger = (g) => {
      d ? m = g : d == !1 && !j._hotUpdating && (Array.isArray(m) ? m.push(g) : console.error("🍍 debuggerEvents should be an array. This is most likely an internal Pinia bug."));
    });
    let d, a, c = Ot([]), f = Ot([]), m;
    const _ = r.state.value[e];
    !i && !_ && ({}.NODE_ENV === "production" || !s) && (r.state.value[e] = {});
    const D = G({});
    let S;
    function I(g) {
      let b;
      d = a = !1, {}.NODE_ENV !== "production" && (m = []), typeof g == "function" ? (g(r.state.value[e]), b = {
        type: Wt.patchFunction,
        storeId: e,
        events: m
      }) : (Io(r.state.value[e], g), b = {
        type: Wt.patchObject,
        payload: g,
        storeId: e,
        events: m
      });
      const H = S = Symbol();
      Cn().then(() => {
        S === H && (d = !0);
      }), a = !0, pr(c, b, r.state.value[e]);
    }
    const P = i ? function() {
      const { state: b } = n, H = b ? b() : {};
      this.$patch((w) => {
        Et(w, H);
      });
    } : (
      /* istanbul ignore next */
      {}.NODE_ENV !== "production" ? () => {
        throw new Error(`🍍: Store "${e}" is built using the setup syntax and does not implement $reset().`);
      } : Ac
    );
    function $() {
      o.stop(), c = [], f = [], r._s.delete(e);
    }
    function L(g, b) {
      return function() {
        ls(r);
        const H = Array.from(arguments), w = [], ue = [];
        function ke(V) {
          w.push(V);
        }
        function K(V) {
          ue.push(V);
        }
        pr(f, {
          args: H,
          name: g,
          store: j,
          after: ke,
          onError: K
        });
        let ee;
        try {
          ee = b.apply(this && this.$id === e ? this : j, H);
        } catch (V) {
          throw pr(ue, V), V;
        }
        return ee instanceof Promise ? ee.then((V) => (pr(w, V), V)).catch((V) => (pr(ue, V), Promise.reject(V))) : (pr(w, ee), ee);
      };
    }
    const z = /* @__PURE__ */ Ot({
      actions: {},
      getters: {},
      state: [],
      hotState: D
    }), fe = {
      _p: r,
      // _s: scope,
      $id: e,
      $onAction: Ia.bind(null, f),
      $patch: I,
      $reset: P,
      $subscribe(g, b = {}) {
        const H = Ia(c, g, b.detached, () => w()), w = o.run(() => Qe(() => r.state.value[e], (ue) => {
          (b.flush === "sync" ? a : d) && g({
            storeId: e,
            type: Wt.direct,
            events: m
          }, ue);
        }, Et({}, l, b)));
        return H;
      },
      $dispose: $
    }, j = ms({}.NODE_ENV !== "production" || Qr ? Et(
      {
        _hmrPayload: z,
        _customProperties: Ot(/* @__PURE__ */ new Set())
        // devtools custom properties
      },
      fe
      // must be added later
      // setupStore
    ) : fe);
    r._s.set(e, j);
    const A = r._e.run(() => (o = ol(), o.run(() => t())));
    for (const g in A) {
      const b = A[g];
      if (ve(b) && !Pa(b) || Bt(b))
        ({}).NODE_ENV !== "production" && s ? Is(D.value, g, je(A, g)) : i || (_ && O0(b) && (ve(b) ? b.value = _[g] : Io(b, _[g])), r.state.value[e][g] = b), {}.NODE_ENV !== "production" && z.state.push(g);
      else if (typeof b == "function") {
        const H = {}.NODE_ENV !== "production" && s ? b : L(g, b);
        A[g] = H, {}.NODE_ENV !== "production" && (z.actions[g] = b), u.actions[g] = b;
      } else
        ({}).NODE_ENV !== "production" && Pa(b) && (z.getters[g] = i ? (
          // @ts-expect-error
          n.getters[g]
        ) : b, Ni && (A._getters || // @ts-expect-error: same
        (A._getters = Ot([]))).push(g));
    }
    if (Et(j, A), Et(re(j), A), Object.defineProperty(j, "$state", {
      get: () => ({}).NODE_ENV !== "production" && s ? D.value : r.state.value[e],
      set: (g) => {
        if ({}.NODE_ENV !== "production" && s)
          throw new Error("cannot set hotState");
        I((b) => {
          Et(b, g);
        });
      }
    }), {}.NODE_ENV !== "production" && (j._hotUpdate = Ot((g) => {
      j._hotUpdating = !0, g._hmrPayload.state.forEach((b) => {
        if (b in j.$state) {
          const H = g.$state[b], w = j.$state[b];
          typeof H == "object" && or(H) && or(w) ? xc(H, w) : g.$state[b] = w;
        }
        Is(j, b, je(g.$state, b));
      }), Object.keys(j.$state).forEach((b) => {
        b in g.$state || ro(j, b);
      }), d = !1, a = !1, r.state.value[e] = je(g._hmrPayload, "hotState"), a = !0, Cn().then(() => {
        d = !0;
      });
      for (const b in g._hmrPayload.actions) {
        const H = g[b];
        Is(j, b, L(b, H));
      }
      for (const b in g._hmrPayload.getters) {
        const H = g._hmrPayload.getters[b], w = i ? (
          // special handling of options api
          B(() => (ls(r), H.call(j, j)))
        ) : H;
        Is(j, b, w);
      }
      Object.keys(j._hmrPayload.getters).forEach((b) => {
        b in g._hmrPayload.getters || ro(j, b);
      }), Object.keys(j._hmrPayload.actions).forEach((b) => {
        b in g._hmrPayload.actions || ro(j, b);
      }), j._hmrPayload = g._hmrPayload, j._getters = g._getters, j._hotUpdating = !1;
    })), Qr) {
      const g = {
        writable: !0,
        configurable: !0,
        // avoid warning on devtools trying to display this property
        enumerable: !1
      };
      ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((b) => {
        Object.defineProperty(j, b, Et({ value: j[b] }, g));
      });
    }
    return r._p.forEach((g) => {
      if (Qr) {
        const b = o.run(() => g({
          store: j,
          app: r._a,
          pinia: r,
          options: u
        }));
        Object.keys(b || {}).forEach((H) => j._customProperties.add(H)), Et(j, b);
      } else
        Et(j, o.run(() => g({
          store: j,
          app: r._a,
          pinia: r,
          options: u
        })));
    }), {}.NODE_ENV !== "production" && j.$state && typeof j.$state == "object" && typeof j.$state.constructor == "function" && !j.$state.constructor.toString().includes("[native code]") && console.warn(`[🍍]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${j.$id}".`), _ && i && n.hydrate && n.hydrate(j.$state, _), d = !0, a = !0, j;
  }
  function S0(e, t, n) {
    let r, s;
    const i = typeof t == "function";
    typeof e == "string" ? (r = e, s = i ? n : t) : (s = e, r = e.id);
    function o(u, l) {
      const d = Ai();
      if (u = // in test mode, ignore the argument provided as we can always retrieve a
      // pinia instance with getActivePinia()
      ({}.NODE_ENV === "test" && qr && qr._testing ? null : u) || d && Qn(_c, null), u && ls(u), {}.NODE_ENV !== "production" && !qr)
        throw new Error(`[🍍]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
      u = qr, u._s.has(r) || (i ? Po(r, t, s, u) : Va(r, s, u), {}.NODE_ENV !== "production" && (o._pinia = u));
      const a = u._s.get(r);
      if ({}.NODE_ENV !== "production" && l) {
        const c = "__hot:" + r, f = i ? Po(c, t, s, u, !0) : Va(c, Et({}, s), u, !0);
        l._hotUpdate(f), delete u.state.value[c], u._s.delete(c);
      }
      if ({}.NODE_ENV !== "production" && Ni && d && d.proxy && // avoid adding stores that are just built for hot module replacement
      !l) {
        const c = d.proxy, f = "_pStores" in c ? c._pStores : c._pStores = {};
        f[r] = a;
      }
      return a;
    }
    return o.$id = r, o;
  }
  function T0(e) {
    {
      e = re(e);
      const t = {};
      for (const n in e) {
        const r = e[n];
        (ve(r) || Bt(r)) && (t[n] = // ---
        je(e, n));
      }
      return t;
    }
  }
  var M0 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Fc = { exports: {} };
  (function(e, t) {
    (function(n, r) {
      e.exports = r();
    })(M0, function() {
      var n = { ar: "٠١٢٣٤٥٦٧٨٩", fa: "۰۱۲۳۴۵۶۷۸۹", ml: "൦൧൨൩൪൫൬൭൮൯", kn: "೦೧೨೩೪೫೬೭೮೯", lo: "໐໑໒໓໔໕໖໗໘໙", or: "୦୧୨୩୪୫୬୭୮୯", kh: "០១២៣៤៥៦៧៨៩", nqo: "߀߁߂߃߄߅߆߇߈߉", pa: "੦੧੨੩੪੫੬੭੮੯", gu: "૦૧૨૩૪૫૬૭૮૯", hi: "०१२३४५६७८९", my: "၀၁၂၃၄၅၆၇၈၉", ta: "௦௧௨௩௪௫௬௭௮௯", te: "౦౧౨౩౪౫౬౭౮౯", th: "๐๑๒๓๔๕๖๗๘๙", bo: "༠༡༢༣༤༥༦༧༨༩" }, r = { ab: ["ru"], abs: ["id"], ace: ["id"], ady: ["ady-cyrl"], aeb: ["aeb-arab"], "aeb-arab": ["ar"], aln: ["sq"], alt: ["ru"], ami: ["zh-hant"], an: ["es"], anp: ["hi"], arn: ["es"], arq: ["ar"], ary: ["ar"], arz: ["ar"], ast: ["es"], atj: ["fr"], av: ["ru"], avk: ["fr", "es", "ru"], awa: ["hi"], ay: ["es"], azb: ["fa"], ba: ["ru"], ban: ["id"], "ban-bali": ["ban"], bar: ["de"], bbc: ["bbc-latn"], "bbc-latn": ["id"], bcc: ["fa"], "be-tarask": ["be"], bgn: ["fa"], bh: ["bho"], bi: ["en"], bjn: ["id"], bm: ["fr"], bpy: ["bn"], bqi: ["fa"], br: ["fr"], btm: ["id"], bug: ["id"], bxr: ["ru"], ca: ["oc"], "cbk-zam": ["es"], cdo: ["nan", "zh-hant"], ce: ["ru"], co: ["it"], crh: ["crh-latn"], "crh-cyrl": ["ru"], cs: ["sk"], csb: ["pl"], cv: ["ru"], "de-at": ["de"], "de-ch": ["de"], "de-formal": ["de"], dsb: ["hsb", "de"], dtp: ["ms"], dty: ["ne"], egl: ["it"], eml: ["it"], "en-ca": ["en"], "en-gb": ["en"], "es-419": ["es"], "es-formal": ["es"], ext: ["es"], ff: ["fr"], fit: ["fi"], frc: ["fr"], frp: ["fr"], frr: ["de"], fur: ["it"], gag: ["tr"], gan: ["gan-hant", "zh-hant", "zh-hans"], "gan-hans": ["zh-hans"], "gan-hant": ["zh-hant", "zh-hans"], gcr: ["fr"], gl: ["pt"], glk: ["fa"], gn: ["es"], gom: ["gom-deva"], "gom-deva": ["hi"], gor: ["id"], gsw: ["de"], guc: ["es"], hak: ["zh-hant"], hif: ["hif-latn"], hrx: ["de"], hsb: ["dsb", "de"], ht: ["fr"], "hu-formal": ["hu"], hyw: ["hy"], ii: ["zh-cn", "zh-hans"], inh: ["ru"], io: ["eo"], iu: ["ike-cans"], jam: ["en"], jut: ["da"], jv: ["id"], kaa: ["kk-latn", "kk-cyrl"], kab: ["fr"], kbd: ["kbd-cyrl"], kbp: ["fr"], khw: ["ur"], kiu: ["tr"], kjp: ["my"], kk: ["kk-cyrl"], "kk-arab": ["kk-cyrl"], "kk-cn": ["kk-arab", "kk-cyrl"], "kk-kz": ["kk-cyrl"], "kk-latn": ["kk-cyrl"], "kk-tr": ["kk-latn", "kk-cyrl"], kl: ["da"], "ko-kp": ["ko"], koi: ["ru"], krc: ["ru"], krl: ["fi"], ks: ["ks-arab"], ksh: ["de"], ku: ["ku-latn"], "ku-arab": ["ckb"], kum: ["ru"], kv: ["ru"], lad: ["es"], lb: ["de"], lbe: ["ru"], lez: ["ru", "az"], li: ["nl"], lij: ["it"], liv: ["et"], lki: ["fa"], lld: ["it", "rm", "fur"], lmo: ["pms", "eml", "lij", "vec", "it"], ln: ["fr"], lrc: ["fa"], ltg: ["lv"], luz: ["fa"], lzh: ["zh-hant"], lzz: ["tr"], mad: ["id"], mai: ["hi"], "map-bms": ["jv", "id"], mdf: ["myv", "ru"], mg: ["fr"], mhr: ["mrj", "ru"], min: ["id"], mnw: ["my"], mo: ["ro"], mrj: ["mhr", "ru"], "ms-arab": ["ms"], mwl: ["pt"], myv: ["mdf", "ru"], mzn: ["fa"], nah: ["es"], nan: ["cdo", "zh-hant"], nap: ["it"], nb: ["nn"], nds: ["de"], "nds-nl": ["nl"], nia: ["id"], "nl-informal": ["nl"], nn: ["nb"], nrm: ["fr"], oc: ["ca", "fr"], olo: ["fi"], os: ["ru"], pcd: ["fr"], pdc: ["de"], pdt: ["de"], pfl: ["de"], pih: ["en"], pms: ["it"], pnt: ["el"], pt: ["pt-br"], "pt-br": ["pt"], qu: ["qug", "es"], qug: ["qu", "es"], rgn: ["it"], rmy: ["ro"], "roa-tara": ["it"], rue: ["uk", "ru"], rup: ["ro"], ruq: ["ruq-latn", "ro"], "ruq-cyrl": ["mk"], "ruq-latn": ["ro"], sa: ["hi"], sah: ["ru"], scn: ["it"], sco: ["en"], sdc: ["it"], sdh: ["cbk", "fa"], ses: ["fr"], sg: ["fr"], sgs: ["lt"], sh: ["bs", "sr-el", "hr"], shi: ["fr"], shy: ["shy-latn"], "shy-latn": ["fr"], sk: ["cs"], skr: ["skr-arab"], "skr-arab": ["ur", "pnb"], sli: ["de"], smn: ["fi"], sr: ["sr-ec"], srn: ["nl"], stq: ["de"], sty: ["ru"], su: ["id"], szl: ["pl"], szy: ["zh-tw", "zh-hant", "zh-hans"], tay: ["zh-tw", "zh-hant", "zh-hans"], tcy: ["kn"], tet: ["pt"], tg: ["tg-cyrl"], trv: ["zh-tw", "zh-hant", "zh-hans"], tt: ["tt-cyrl", "ru"], "tt-cyrl": ["ru"], ty: ["fr"], tyv: ["ru"], udm: ["ru"], ug: ["ug-arab"], vec: ["it"], vep: ["et"], vls: ["nl"], vmf: ["de"], vot: ["fi"], vro: ["et"], wa: ["fr"], wo: ["fr"], wuu: ["zh-hans"], xal: ["ru"], xmf: ["ka"], yi: ["he"], za: ["zh-hans"], zea: ["nl"], zgh: ["kab"], zh: ["zh-hans"], "zh-cn": ["zh-hans"], "zh-hant": ["zh-hans"], "zh-hk": ["zh-hant", "zh-hans"], "zh-mo": ["zh-hk", "zh-hant", "zh-hans"], "zh-my": ["zh-sg", "zh-hans"], "zh-sg": ["zh-hans"], "zh-tw": ["zh-hant", "zh-hans"] };
      class s {
        constructor(c) {
          this.locale = c;
        }
        convertPlural(c, f) {
          const m = /\d+=/i;
          if (!f || f.length === 0)
            return "";
          for (let D = 0; D < f.length; D++) {
            const S = f[D];
            if (m.test(S)) {
              if (parseInt(S.slice(0, S.indexOf("=")), 10) === c)
                return S.slice(S.indexOf("=") + 1);
              f[D] = void 0;
            }
          }
          f = f.filter((D) => !!D);
          let _ = this.getPluralForm(c, this.locale);
          return _ = Math.min(_, f.length - 1), f[_];
        }
        getPluralForm(c, f) {
          const m = new Intl.PluralRules(f), _ = m.resolvedOptions().pluralCategories, D = m.select(c);
          return ["zero", "one", "two", "few", "many", "other"].filter((S) => _.includes(S)).indexOf(D);
        }
        convertNumber(c, f = !1) {
          let m = this.digitTransformTable(this.locale), _ = "";
          if (f) {
            if (parseFloat(c, 10) === c || !m)
              return c;
            const D = [];
            for (const I in m)
              D[m[I]] = I;
            m = D;
            const S = String(c);
            for (let I = 0; I < S.length; I++)
              _ += m[S[I]] || S[I];
            return parseFloat(_, 10);
          }
          if (Intl.NumberFormat) {
            let D;
            const S = [...r[this.locale] || [], "en"];
            return D = Intl.NumberFormat.supportedLocalesOf(this.locale).length ? [this.locale] : S, _ = new Intl.NumberFormat(D).format(c), _ === "NaN" && (_ = c), _;
          }
        }
        convertGrammar(c, f) {
          return c;
        }
        gender(c, f) {
          if (!f || f.length === 0)
            return "";
          for (; f.length < 2; )
            f.push(f[f.length - 1]);
          return c === "male" ? f[0] : c === "female" ? f[1] : f.length === 3 ? f[2] : f[0];
        }
        digitTransformTable(c) {
          return !!n[c] && n[c].split("");
        }
      }
      var i = { bs: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "instrumental":
              a = "s " + a;
              break;
            case "lokativ":
              a = "o " + a;
          }
          return a;
        }
      }, default: s, dsb: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "instrumental":
              a = "z " + a;
              break;
            case "lokatiw":
              a = "wo " + a;
          }
          return a;
        }
      }, fi: class extends s {
        convertGrammar(a, c) {
          let f = a.match(/[aou][^äöy]*$/i);
          const m = a;
          switch (a.match(/wiki$/i) && (f = !1), a.match(/[bcdfghjklmnpqrstvwxz]$/i) && (a += "i"), c) {
            case "genitive":
              a += "n";
              break;
            case "elative":
              a += f ? "sta" : "stä";
              break;
            case "partitive":
              a += f ? "a" : "ä";
              break;
            case "illative":
              a += a.slice(-1) + "n";
              break;
            case "inessive":
              a += f ? "ssa" : "ssä";
              break;
            default:
              a = m;
          }
          return a;
        }
      }, ga: class extends s {
        convertGrammar(a, c) {
          if (c === "ainmlae")
            switch (a) {
              case "an Domhnach":
                a = "Dé Domhnaigh";
                break;
              case "an Luan":
                a = "Dé Luain";
                break;
              case "an Mháirt":
                a = "Dé Mháirt";
                break;
              case "an Chéadaoin":
                a = "Dé Chéadaoin";
                break;
              case "an Déardaoin":
                a = "Déardaoin";
                break;
              case "an Aoine":
                a = "Dé hAoine";
                break;
              case "an Satharn":
                a = "Dé Sathairn";
            }
          return a;
        }
      }, he: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "prefixed":
            case "תחילית":
              a.slice(0, 1) === "ו" && a.slice(0, 2) !== "וו" && (a = "ו" + a), a.slice(0, 1) === "ה" && (a = a.slice(1)), (a.slice(0, 1) < "א" || a.slice(0, 1) > "ת") && (a = "־" + a);
          }
          return a;
        }
      }, hsb: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "instrumental":
              a = "z " + a;
              break;
            case "lokatiw":
              a = "wo " + a;
          }
          return a;
        }
      }, hu: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "rol":
              a += "ról";
              break;
            case "ba":
              a += "ba";
              break;
            case "k":
              a += "k";
          }
          return a;
        }
      }, hy: class extends s {
        convertGrammar(a, c) {
          return c === "genitive" && (a.slice(-1) === "ա" ? a = a.slice(0, -1) + "այի" : a.slice(-1) === "ո" ? a = a.slice(0, -1) + "ոյի" : a.slice(-4) === "գիրք" ? a = a.slice(0, -4) + "գրքի" : a += "ի"), a;
        }
      }, la: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "genitive":
              a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/u[ms]$/i, "i")).replace(/ommunia$/i, "ommunium")).replace(/a$/i, "ae")).replace(/libri$/i, "librorum")).replace(/nuntii$/i, "nuntiorum")).replace(/tio$/i, "tionis")).replace(/ns$/i, "ntis")).replace(/as$/i, "atis")).replace(/es$/i, "ei");
              break;
            case "accusative":
              a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/u[ms]$/i, "um")).replace(/ommunia$/i, "am")).replace(/a$/i, "ommunia")).replace(/libri$/i, "libros")).replace(/nuntii$/i, "nuntios")).replace(/tio$/i, "tionem")).replace(/ns$/i, "ntem")).replace(/as$/i, "atem")).replace(/es$/i, "em");
              break;
            case "ablative":
              a = (a = (a = (a = (a = (a = (a = (a = (a = a.replace(/u[ms]$/i, "o")).replace(/ommunia$/i, "ommunibus")).replace(/a$/i, "a")).replace(/libri$/i, "libris")).replace(/nuntii$/i, "nuntiis")).replace(/tio$/i, "tione")).replace(/ns$/i, "nte")).replace(/as$/i, "ate")).replace(/es$/i, "e");
          }
          return a;
        }
      }, os: class extends s {
        convertGrammar(a, c) {
          let f, m, _, D;
          switch (f = "мæ", m = "", _ = "", D = "", a.match(/тæ$/i) ? (a = a.slice(0, -1), f = "æм") : a.match(/[аæеёиоыэюя]$/i) ? m = "й" : a.match(/у$/i) ? a.slice(-2, -1).match(/[аæеёиоыэюя]$/i) || (m = "й") : a.match(/[бвгджзйклмнопрстфхцчшщьъ]$/i) || (_ = "-"), c) {
            case "genitive":
              D = _ + m + "ы";
              break;
            case "dative":
              D = _ + m + "æн";
              break;
            case "allative":
              D = _ + f;
              break;
            case "ablative":
              D = m === "й" ? _ + m + "æ" : _ + m + "æй";
              break;
            case "superessive":
              D = _ + m + "ыл";
              break;
            case "equative":
              D = _ + m + "ау";
              break;
            case "comitative":
              D = _ + "имæ";
          }
          return a + D;
        }
      }, ru: class extends s {
        convertGrammar(a, c) {
          return c === "genitive" && (a.slice(-1) === "ь" ? a = a.slice(0, -1) + "я" : a.slice(-2) === "ия" ? a = a.slice(0, -2) + "ии" : a.slice(-2) === "ка" ? a = a.slice(0, -2) + "ки" : a.slice(-2) === "ти" ? a = a.slice(0, -2) + "тей" : a.slice(-2) === "ды" ? a = a.slice(0, -2) + "дов" : a.slice(-3) === "ник" && (a = a.slice(0, -3) + "ника")), a;
        }
      }, sl: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "mestnik":
              a = "o " + a;
              break;
            case "orodnik":
              a = "z " + a;
          }
          return a;
        }
      }, uk: class extends s {
        convertGrammar(a, c) {
          switch (c) {
            case "genitive":
              a.slice(-1) === "ь" ? a = a.slice(0, -1) + "я" : a.slice(-2) === "ія" ? a = a.slice(0, -2) + "ії" : a.slice(-2) === "ка" ? a = a.slice(0, -2) + "ки" : a.slice(-2) === "ти" ? a = a.slice(0, -2) + "тей" : a.slice(-2) === "ды" ? a = a.slice(0, -2) + "дов" : a.slice(-3) === "ник" && (a = a.slice(0, -3) + "ника");
              break;
            case "accusative":
              a.slice(-2) === "ія" && (a = a.slice(0, -2) + "ію");
          }
          return a;
        }
      } };
      const o = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\uD800[\uDC00-\uDC0B]|\uD800[\uDC0D-\uDC26]|\uD800[\uDC28-\uDC3A]|𐀼|𐀽|\uD800[\uDC3F-\uDC4D]|\uD800[\uDC50-\uDC5D]|\uD800[\uDC80-\uDCFA]|𐄀|𐄂|\uD800[\uDD07-\uDD33]|\uD800[\uDD37-\uDD3F]|\uD800[\uDDD0-\uDDFC]|\uD800[\uDE80-\uDE9C]|\uD800[\uDEA0-\uDED0]|\uD800[\uDF00-\uDF23]|\uD800[\uDF30-\uDF4A]|\uD800[\uDF50-\uDF75]|\uD800[\uDF80-\uDF9D]|\uD800[\uDF9F-\uDFC3]|\uD800[\uDFC8-\uDFD5]|\uD801[\uDC00-\uDC9D]|\uD801[\uDCA0-\uDCA9]|\uD801[\uDD00-\uDD27]|\uD801[\uDD30-\uDD63]|𐕯|\uD801[\uDE00-\uDF36]|\uD801[\uDF40-\uDF55]|\uD801[\uDF60-\uDF67]|𑀀|\uD804[\uDC02-\uDC37]|\uD804[\uDC47-\uDC4D]|\uD804[\uDC66-\uDC6F]|\uD804[\uDC82-\uDCB2]|𑂷|𑂸|\uD804[\uDCBB-\uDCC1]|\uD804[\uDCD0-\uDCE8]|\uD804[\uDCF0-\uDCF9]|\uD804[\uDD03-\uDD26]|𑄬|\uD804[\uDD36-\uDD43]|\uD804[\uDD50-\uDD72]|\uD804[\uDD74-\uDD76]|\uD804[\uDD82-\uDDB5]|\uD804[\uDDBF-\uDDC9]|𑇍|\uD804[\uDDD0-\uDDDF]|\uD804[\uDDE1-\uDDF4]|\uD804[\uDE00-\uDE11]|\uD804[\uDE13-\uDE2E]|𑈲|𑈳|𑈵|\uD804[\uDE38-\uDE3D]|\uD804[\uDE80-\uDE86]|𑊈|\uD804[\uDE8A-\uDE8D]|\uD804[\uDE8F-\uDE9D]|\uD804[\uDE9F-\uDEA9]|\uD804[\uDEB0-\uDEDE]|\uD804[\uDEE0-\uDEE2]|\uD804[\uDEF0-\uDEF9]|𑌂|𑌃|\uD804[\uDF05-\uDF0C]|𑌏|𑌐|\uD804[\uDF13-\uDF28]|\uD804[\uDF2A-\uDF30]|𑌲|𑌳|\uD804[\uDF35-\uDF39]|\uD804[\uDF3D-\uDF3F]|\uD804[\uDF41-\uDF44]|𑍇|𑍈|\uD804[\uDF4B-\uDF4D]|𑍐|𑍗|\uD804[\uDF5D-\uDF63]|\uD805[\uDC80-\uDCB2]|𑒹|\uD805[\uDCBB-\uDCBE]|𑓁|\uD805[\uDCC4-\uDCC7]|\uD805[\uDCD0-\uDCD9]|\uD805[\uDD80-\uDDB1]|\uD805[\uDDB8-\uDDBB]|𑖾|\uD805[\uDDC1-\uDDDB]|\uD805[\uDE00-\uDE32]|𑘻|𑘼|𑘾|\uD805[\uDE41-\uDE44]|\uD805[\uDE50-\uDE59]|\uD805[\uDE80-\uDEAA]|𑚬|𑚮|𑚯|𑚶|\uD805[\uDEC0-\uDEC9]|\uD805[\uDF00-\uDF19]|𑜠|𑜡|𑜦|\uD805[\uDF30-\uDF3F]|\uD806[\uDCA0-\uDCF2]|𑣿|\uD806[\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E]|\uD809[\uDC70-\uDC74]|\uD809[\uDC80-\uDD43]|\uD80C[\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38]|\uD81A[\uDE40-\uDE5E]|\uD81A[\uDE60-\uDE69]|𖩮|𖩯|\uD81A[\uDED0-\uDEED]|𖫵|\uD81A[\uDF00-\uDF2F]|\uD81A[\uDF37-\uDF45]|\uD81A[\uDF50-\uDF59]|\uD81A[\uDF5B-\uDF61]|\uD81A[\uDF63-\uDF77]|\uD81A[\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44]|\uD81B[\uDF50-\uDF7E]|\uD81B[\uDF93-\uDF9F]|𛀀|𛀁|\uD82F[\uDC00-\uDC6A]|\uD82F[\uDC70-\uDC7C]|\uD82F[\uDC80-\uDC88]|\uD82F[\uDC90-\uDC99]|𛲜|𛲟|\uD834[\uDC00-\uDCF5]|\uD834[\uDD00-\uDD26]|\uD834[\uDD29-\uDD66]|\uD834[\uDD6A-\uDD72]|𝆃|𝆄|\uD834[\uDD8C-\uDDA9]|\uD834[\uDDAE-\uDDE8]|\uD834[\uDF60-\uDF71]|\uD835[\uDC00-\uDC54]|\uD835[\uDC56-\uDC9C]|𝒞|𝒟|𝒢|𝒥|𝒦|\uD835[\uDCA9-\uDCAC]|\uD835[\uDCAE-\uDCB9]|𝒻|\uD835[\uDCBD-\uDCC3]|\uD835[\uDCC5-\uDD05]|\uD835[\uDD07-\uDD0A]|\uD835[\uDD0D-\uDD14]|\uD835[\uDD16-\uDD1C]|\uD835[\uDD1E-\uDD39]|\uD835[\uDD3B-\uDD3E]|\uD835[\uDD40-\uDD44]|𝕆|\uD835[\uDD4A-\uDD50]|\uD835[\uDD52-\uDEA5]|\uD835[\uDEA8-\uDEDA]|\uD835[\uDEDC-\uDF14]|\uD835[\uDF16-\uDF4E]|\uD835[\uDF50-\uDF88]|\uD835[\uDF8A-\uDFC2]|\uD835[\uDFC4-\uDFCB]|\uD836[\uDC00-\uDDFF]|\uD836[\uDE37-\uDE3A]|\uD836[\uDE6D-\uDE74]|\uD836[\uDE76-\uDE83]|\uD836[\uDE85-\uDE8B]|\uD83C[\uDD10-\uDD2E]|\uD83C[\uDD30-\uDD69]|\uD83C[\uDD70-\uDD9A]|\uD83C[\uDDE6-\uDE02]|\uD83C[\uDE10-\uDE3A]|\uD83C[\uDE40-\uDE48]|🉐|🉑|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6]|\uD869[\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34]|\uD86D[\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD86E[\uDC20-\uDFFF]|[\uD86F-\uD872][\uDC00-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|[\uDB80-\uDBBE][\uDC00-\uDFFF]|\uDBBF[\uDC00-\uDFFD]|[\uDBC0-\uDBFE][\uDC00-\uDFFF]|\uDBFF[\uDC00-\uDFFD])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\uD802[\uDC00-\uDD1E]|\uD802[\uDD20-\uDE00]|𐨄|\uD802[\uDE07-\uDE0B]|\uD802[\uDE10-\uDE37]|\uD802[\uDE3B-\uDE3E]|\uD802[\uDE40-\uDEE4]|\uD802[\uDEE7-\uDF38]|\uD802[\uDF40-\uDFFF]|\uD803[\uDC00-\uDE5F]|\uD803[\uDE7F-\uDFFF]|\uD83A[\uDC00-\uDCCF]|\uD83A[\uDCD7-\uDFFF]|\uD83B[\uDC00-\uDDFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDF00-\uDFFF]|\uD83B[\uDE00-\uDEEF]|\uD83B[\uDEF2-\uDEFF]))");
      class u {
        constructor(c) {
          this.locale = c, this.language = new (i[c] || i.default)(c);
        }
        emit(c, f) {
          let m, _, D;
          switch (typeof c) {
            case "string":
            case "number":
              m = c;
              break;
            case "object":
              if (_ = c.slice(1).map((S) => this.emit(S, f)), D = c[0].toLowerCase(), typeof this[D] != "function")
                throw new Error('unknown operation "' + D + '"');
              m = this[D](_, f);
              break;
            case "undefined":
              m = "";
              break;
            default:
              throw new Error("unexpected type in AST: " + typeof c);
          }
          return m;
        }
        concat(c) {
          let f = "";
          return c.forEach((m) => {
            f += m;
          }), f;
        }
        replace(c, f) {
          const m = parseInt(c[0], 10);
          return m < f.length ? f[m] : "$" + (m + 1);
        }
        plural(c) {
          const f = parseFloat(this.language.convertNumber(c[0], 10)), m = c.slice(1);
          return m.length ? this.language.convertPlural(f, m) : "";
        }
        gender(c) {
          const f = c[0], m = c.slice(1);
          return this.language.gender(f, m);
        }
        grammar(c) {
          const f = c[0], m = c[1];
          return m && f && this.language.convertGrammar(m, f);
        }
        wikilink(c) {
          let f, m = c[0];
          m.charAt(0) === ":" && (m = m.slice(1));
          const _ = `./${m}`;
          return f = c.length === 1 ? m : c[1], `<a href="${_}" title="${m}">${f}</a>`;
        }
        extlink(c) {
          if (c.length !== 2)
            throw new Error("Expected two items in the node");
          return `<a href="${c[0]}">${c[1]}</a>`;
        }
        bidi(c) {
          const f = function(m) {
            const _ = m.match(o);
            return _ ? _[2] === void 0 ? "ltr" : "rtl" : null;
          }(c[0]);
          return f === "ltr" ? "‪" + c[0] + "‬" : f === "rtl" ? "‫" + c[0] + "‬" : c[0];
        }
        formatnum(c) {
          const f = !!c[1] && c[1] === "R", m = c[0];
          return typeof m == "string" || typeof m == "number" ? this.language.convertNumber(m, f) : m;
        }
        htmlattributes(c) {
          const f = {};
          for (let m = 0, _ = c.length; m < _; m += 2)
            f[c[m]] = c[m + 1];
          return f;
        }
        htmlelement(c) {
          const f = c.shift(), m = c.shift();
          let _ = c, D = "";
          for (const S in m)
            D += ` ${S}="${m[S]}"`;
          return Array.isArray(_) || (_ = [_]), `<${f}${D}>${_.join("")}</${f}>`;
        }
      }
      class l {
        constructor(c, { wikilinks: f = !1 } = {}) {
          this.locale = c, this.wikilinks = f, this.emitter = new u(this.locale);
        }
        parse(c, f) {
          if (c.includes("{{") || c.includes("<") || this.wikilinks && c.includes("[")) {
            const m = function(_, { wikilinks: D = !1 } = {}) {
              let S = 0;
              function I(v) {
                return () => {
                  for (let q = 0; q < v.length; q++) {
                    const we = v[q]();
                    if (we !== null)
                      return we;
                  }
                  return null;
                };
              }
              function P(v) {
                const q = S, we = [];
                for (let Ge = 0; Ge < v.length; Ge++) {
                  const bt = v[Ge]();
                  if (bt === null)
                    return S = q, null;
                  we.push(bt);
                }
                return we;
              }
              function $(v, q) {
                return () => {
                  const we = S, Ge = [];
                  let bt = q();
                  for (; bt !== null; )
                    Ge.push(bt), bt = q();
                  return Ge.length < v ? (S = we, null) : Ge;
                };
              }
              function L(v) {
                const q = v.length;
                return () => {
                  let we = null;
                  return _.slice(S, S + q) === v && (we = v, S += q), we;
                };
              }
              function z(v) {
                return () => {
                  const q = _.slice(S).match(v);
                  return q === null ? null : (S += q[0].length, q[0]);
                };
              }
              const fe = z(/^\s+/), j = L("|"), A = L(":"), g = L("\\"), b = z(/^./), H = L("$"), w = z(/^\d+/), ue = L('"'), ke = L("'"), K = z(D ? /^[^{}[\]$<\\]/ : /^[^{}$<\\]/), ee = z(D ? /^[^{}[\]$\\|]/ : /^[^{}$\\|]/), V = I([te, z(D ? /^[^{}[\]$\s]/ : /^[^{}$\s]/)]);
              function te() {
                const v = P([g, b]);
                return v === null ? null : v[1];
              }
              const He = I([te, ee]), at = I([te, K]);
              function Dt() {
                const v = P([H, w]);
                return v === null ? null : ["REPLACE", parseInt(v[1], 10) - 1];
              }
              const pt = (se = z(/^[ !"$&'()*,./0-9;=?@A-Z^_`a-z~\x80-\xFF+-]+/), Se = function(v) {
                return v.toString();
              }, () => {
                const v = se();
                return v === null ? null : Se(v);
              });
              var se, Se;
              function lt() {
                const v = P([j, $(0, ae)]);
                if (v === null)
                  return null;
                const q = v[1];
                return q.length > 1 ? ["CONCAT"].concat(q) : q[0];
              }
              function Ui() {
                const v = P([pt, A, Dt]);
                return v === null ? null : [v[0], v[2]];
              }
              function kt() {
                const v = P([pt, A, ae]);
                return v === null ? null : [v[0], v[2]];
              }
              function fr() {
                const v = P([pt, A]);
                return v === null ? null : [v[0], ""];
              }
              const Cs = I([function() {
                const v = P([I([Ui, kt, fr]), $(0, lt)]);
                return v === null ? null : v[0].concat(v[1]);
              }, function() {
                const v = P([pt, $(0, lt)]);
                return v === null ? null : [v[0]].concat(v[1]);
              }]), _n = L("{{"), Vr = L("}}"), $r = L("[["), h = L("]]"), p = L("["), y = L("]");
              function C() {
                const v = P([_n, Cs, Vr]);
                return v === null ? null : v[1];
              }
              const E = I([function() {
                const v = P([$(1, ae), j, $(1, ne)]);
                return v === null ? null : [["CONCAT"].concat(v[0]), ["CONCAT"].concat(v[2])];
              }, function() {
                const v = P([$(1, ae)]);
                return v === null ? null : [["CONCAT"].concat(v[0])];
              }]);
              function O() {
                let v = null;
                const q = P([$r, E, h]);
                if (q !== null) {
                  const we = q[1];
                  v = ["WIKILINK"].concat(we);
                }
                return v;
              }
              function M() {
                let v = null;
                const q = P([p, $(1, Q), fe, $(1, ne), y]);
                return q !== null && (v = ["EXTLINK", q[1].length === 1 ? q[1][0] : ["CONCAT"].concat(q[1]), ["CONCAT"].concat(q[3])]), v;
              }
              const k = z(/^[A-Za-z]+/);
              function T() {
                const v = z(/^[^"]*/), q = P([ue, v, ue]);
                return q === null ? null : q[1];
              }
              function x() {
                const v = z(/^[^']*/), q = P([ke, v, ke]);
                return q === null ? null : q[1];
              }
              function J() {
                const v = z(/^\s*=\s*/), q = P([fe, k, v, I([T, x])]);
                return q === null ? null : [q[1], q[3]];
              }
              function U() {
                const v = $(0, J)();
                return Array.prototype.concat.apply(["HTMLATTRIBUTES"], v);
              }
              const Q = I([C, Dt, O, M, function() {
                const v = $(1, V)();
                return v === null ? null : v.join("");
              }]), ne = I([C, Dt, O, M, function() {
                let v = null;
                const q = S, we = L("<"), Ge = z(/^\/?/), bt = z(/^\s*>/), Zt = P([we, k, U, Ge, bt]);
                if (Zt === null)
                  return null;
                const Rr = S, We = Zt[1], ct = $(0, ne)(), xs = S, Hu = P([L("</"), k, bt]);
                if (Hu === null)
                  return ["CONCAT", _.slice(q, Rr)].concat(ct);
                const Id = S, Pd = Hu[1], Wu = Zt[2];
                if (function(Bn, As, zi, qi = { allowedHtmlElements: ["b", "bdi", "del", "i", "ins", "u", "font", "big", "small", "sub", "sup", "h1", "h2", "h3", "h4", "h5", "h6", "cite", "code", "em", "s", "strike", "strong", "tt", "var", "div", "center", "blockquote", "ol", "ul", "dl", "table", "caption", "pre", "ruby", "rb", "rp", "rt", "rtc", "p", "span", "abbr", "dfn", "kbd", "samp", "data", "time", "mark", "li", "dt", "dd"], allowedHtmlCommonAttributes: ["id", "class", "style", "lang", "dir", "title", "aria-describedby", "aria-flowto", "aria-hidden", "aria-label", "aria-labelledby", "aria-owns", "role", "about", "property", "resource", "datatype", "typeof", "itemid", "itemprop", "itemref", "itemscope", "itemtype"], allowedHtmlAttributesByElement: {} }) {
                  if ((Bn = Bn.toLowerCase()) !== (As = As.toLowerCase()) || qi.allowedHtmlElements.indexOf(Bn) === -1)
                    return !1;
                  const Vd = /[\000-\010\013\016-\037\177]|expression|filter\s*:|accelerator\s*:|-o-link\s*:|-o-link-source\s*:|-o-replace\s*:|url\s*\(|image\s*\(|image-set\s*\(/i;
                  for (let Fs = 0, $d = zi.length; Fs < $d; Fs += 2) {
                    const Ki = zi[Fs];
                    if (qi.allowedHtmlCommonAttributes.indexOf(Ki) === -1 && (qi.allowedHtmlAttributesByElement[Bn] || []).indexOf(Ki) === -1 || Ki === "style" && zi[Fs + 1].search(Vd) !== -1)
                      return !1;
                  }
                  return !0;
                }(We, Pd, Wu.slice(1)))
                  v = ["HTMLELEMENT", We, Wu].concat(ct);
                else {
                  const Bn = (As) => As.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
                  v = ["CONCAT", Bn(_.slice(q, Rr))].concat(ct, Bn(_.slice(xs, Id)));
                }
                return v;
              }, function() {
                const v = $(1, at)();
                return v === null ? null : v.join("");
              }]), ae = I([C, Dt, function() {
                const v = $(1, He)();
                return v === null ? null : v.join("");
              }]), De = function() {
                const v = $(0, ne)();
                return v === null ? null : ["CONCAT"].concat(v);
              }();
              if (De === null || S !== _.length)
                throw new Error("Parse error at position " + S.toString() + " in input: " + _);
              return De;
            }(c, { wikilinks: this.wikilinks });
            return this.emitter.emit(m, f);
          }
          return this.simpleParse(c, f);
        }
        simpleParse(c, f) {
          return c.replace(/\$(\d+)/g, (m, _) => {
            const D = parseInt(_, 10) - 1;
            return f[D] !== void 0 ? f[D] : "$" + _;
          });
        }
      }
      class d {
        constructor(c) {
          this.sourceMap = /* @__PURE__ */ new Map();
        }
        load(c, f) {
          if (typeof c != "object")
            throw new Error("Invalid message source. Must be an object");
          if (f) {
            if (!/^[a-zA-Z0-9-]+$/.test(f))
              throw new Error(`Invalid locale ${f}`);
            for (const m in c)
              if (m.indexOf("@") !== 0) {
                if (typeof c[m] == "object")
                  return this.load(c);
                if (typeof c[m] != "string")
                  throw new Error(`Invalid message for message ${m} in ${f} locale.`);
                break;
              }
            this.sourceMap.has(f) ? this.sourceMap.set(f, Object.assign(this.sourceMap.get(f), c)) : this.sourceMap.set(f, c);
          } else
            for (f in c)
              this.load(c[f], f);
        }
        getMessage(c, f) {
          const m = this.sourceMap.get(f);
          return m ? m[c] : null;
        }
        hasLocale(c) {
          return this.sourceMap.has(c);
        }
      }
      return class {
        constructor(a, { finalFallback: c = "en", messages: f, wikilinks: m = !1 } = {}) {
          this.locale = a, this.parser = new l(this.locale, { wikilinks: m }), this.messageStore = new d(), f && this.load(f, this.locale), this.finalFallback = c, this.wikilinks = m;
        }
        load(a, c) {
          return this.messageStore.load(a, c || this.locale);
        }
        i18n(a, ...c) {
          return this.parser.parse(this.getMessage(a), c);
        }
        setLocale(a) {
          this.locale = a, this.parser = new l(this.locale, { wikilinks: this.wikilinks });
        }
        getFallbackLocales() {
          return [...r[this.locale] || [], this.finalFallback];
        }
        getMessage(a) {
          let c = this.locale, f = 0;
          const m = this.getFallbackLocales(this.locale);
          for (; c; ) {
            const _ = c.split("-");
            let D = _.length;
            do {
              const S = _.slice(0, D).join("-"), I = this.messageStore.getMessage(a, S);
              if (typeof I == "string")
                return I;
              D--;
            } while (D);
            c = m[f], f++;
          }
          return a;
        }
        registerParserPlugin(a, c) {
          u.prototype[a] = c;
        }
      };
    });
  })(Fc);
  var B0 = Fc.exports;
  const $a = (e) => {
    let t, n;
    if (Array.isArray(e.value) ? (t = e.arg, n = e.value) : e.value !== null && typeof e.value == "object" ? (t = e.value.msg, n = e.value.params) : t = e.arg || e.value, n = n || [], Array.isArray(n) || (n = [n]), !t)
      throw new Error(`${e.rawName} used with parameter array but without message key`);
    return { msg: t, params: n };
  }, I0 = Symbol("banana-context");
  function P0(e = { messages: {}, locale: "en", wikilinks: !0 }) {
    const t = ms(new B0(e.locale, e));
    return {
      install: (n) => {
        n.provide(I0, t), n.config.globalProperties.$i18n = (r, s) => (s = s || [], Array.isArray(s) || (s = [s]), t.i18n(r, ...s)), n.provide("setLocale", (r) => {
          t.setLocale(r);
        }), n.directive("i18n", (r, s) => {
          const { msg: i, params: o } = $a(s);
          s.modifiers.html ? r.innerHTML = t.i18n(i, ...o) : r.textContent = t.i18n(i, ...o);
        }), n.directive("i18n-html", (r, s) => {
          const { msg: i, params: o } = $a(s);
          r.innerHTML = t.i18n(i, ...o);
        });
      }
    };
  }
  //! moment.js
  //! version : 2.29.4
  //! authors : Tim Wood, Iskren Chernev, Moment.js contributors
  //! license : MIT
  //! momentjs.com
  var kc;
  function R() {
    return kc.apply(null, arguments);
  }
  function V0(e) {
    kc = e;
  }
  function It(e) {
    return e instanceof Array || Object.prototype.toString.call(e) === "[object Array]";
  }
  function tr(e) {
    return e != null && Object.prototype.toString.call(e) === "[object Object]";
  }
  function _e(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }
  function yu(e) {
    if (Object.getOwnPropertyNames)
      return Object.getOwnPropertyNames(e).length === 0;
    var t;
    for (t in e)
      if (_e(e, t))
        return !1;
    return !0;
  }
  function ft(e) {
    return e === void 0;
  }
  function dn(e) {
    return typeof e == "number" || Object.prototype.toString.call(e) === "[object Number]";
  }
  function bs(e) {
    return e instanceof Date || Object.prototype.toString.call(e) === "[object Date]";
  }
  function Nc(e, t) {
    var n = [], r, s = e.length;
    for (r = 0; r < s; ++r)
      n.push(t(e[r], r));
    return n;
  }
  function xn(e, t) {
    for (var n in t)
      _e(t, n) && (e[n] = t[n]);
    return _e(t, "toString") && (e.toString = t.toString), _e(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }
  function Kt(e, t, n, r) {
    return Xc(e, t, n, r, !0).utc();
  }
  function $0() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidEra: null,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      era: null,
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    };
  }
  function le(e) {
    return e._pf == null && (e._pf = $0()), e._pf;
  }
  var Vo;
  Array.prototype.some ? Vo = Array.prototype.some : Vo = function(e) {
    var t = Object(this), n = t.length >>> 0, r;
    for (r = 0; r < n; r++)
      if (r in t && e.call(this, t[r], r, t))
        return !0;
    return !1;
  };
  function Du(e) {
    if (e._isValid == null) {
      var t = le(e), n = Vo.call(t.parsedDateParts, function(s) {
        return s != null;
      }), r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidEra && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (r = r && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === void 0), Object.isFrozen == null || !Object.isFrozen(e))
        e._isValid = r;
      else
        return r;
    }
    return e._isValid;
  }
  function Oi(e) {
    var t = Kt(NaN);
    return e != null ? xn(le(t), e) : le(t).userInvalidated = !0, t;
  }
  var Ra = R.momentProperties = [], so = !1;
  function bu(e, t) {
    var n, r, s, i = Ra.length;
    if (ft(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), ft(t._i) || (e._i = t._i), ft(t._f) || (e._f = t._f), ft(t._l) || (e._l = t._l), ft(t._strict) || (e._strict = t._strict), ft(t._tzm) || (e._tzm = t._tzm), ft(t._isUTC) || (e._isUTC = t._isUTC), ft(t._offset) || (e._offset = t._offset), ft(t._pf) || (e._pf = le(t)), ft(t._locale) || (e._locale = t._locale), i > 0)
      for (n = 0; n < i; n++)
        r = Ra[n], s = t[r], ft(s) || (e[r] = s);
    return e;
  }
  function vs(e) {
    bu(this, e), this._d = new Date(e._d != null ? e._d.getTime() : NaN), this.isValid() || (this._d = /* @__PURE__ */ new Date(NaN)), so === !1 && (so = !0, R.updateOffset(this), so = !1);
  }
  function Pt(e) {
    return e instanceof vs || e != null && e._isAMomentObject != null;
  }
  function Oc(e) {
    R.suppressDeprecationWarnings === !1 && typeof console < "u" && console.warn && console.warn("Deprecation warning: " + e);
  }
  function At(e, t) {
    var n = !0;
    return xn(function() {
      if (R.deprecationHandler != null && R.deprecationHandler(null, e), n) {
        var r = [], s, i, o, u = arguments.length;
        for (i = 0; i < u; i++) {
          if (s = "", typeof arguments[i] == "object") {
            s += `
[` + i + "] ";
            for (o in arguments[0])
              _e(arguments[0], o) && (s += o + ": " + arguments[0][o] + ", ");
            s = s.slice(0, -2);
          } else
            s = arguments[i];
          r.push(s);
        }
        Oc(
          e + `
Arguments: ` + Array.prototype.slice.call(r).join("") + `
` + new Error().stack
        ), n = !1;
      }
      return t.apply(this, arguments);
    }, t);
  }
  var La = {};
  function Sc(e, t) {
    R.deprecationHandler != null && R.deprecationHandler(e, t), La[e] || (Oc(t), La[e] = !0);
  }
  R.suppressDeprecationWarnings = !1;
  R.deprecationHandler = null;
  function Gt(e) {
    return typeof Function < "u" && e instanceof Function || Object.prototype.toString.call(e) === "[object Function]";
  }
  function R0(e) {
    var t, n;
    for (n in e)
      _e(e, n) && (t = e[n], Gt(t) ? this[n] = t : this["_" + n] = t);
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp(
      (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source
    );
  }
  function $o(e, t) {
    var n = xn({}, e), r;
    for (r in t)
      _e(t, r) && (tr(e[r]) && tr(t[r]) ? (n[r] = {}, xn(n[r], e[r]), xn(n[r], t[r])) : t[r] != null ? n[r] = t[r] : delete n[r]);
    for (r in e)
      _e(e, r) && !_e(t, r) && tr(e[r]) && (n[r] = xn({}, n[r]));
    return n;
  }
  function vu(e) {
    e != null && this.set(e);
  }
  var Ro;
  Object.keys ? Ro = Object.keys : Ro = function(e) {
    var t, n = [];
    for (t in e)
      _e(e, t) && n.push(t);
    return n;
  };
  var L0 = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
  };
  function j0(e, t, n) {
    var r = this._calendar[e] || this._calendar.sameElse;
    return Gt(r) ? r.call(t, n) : r;
  }
  function qt(e, t, n) {
    var r = "" + Math.abs(e), s = t - r.length, i = e >= 0;
    return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + r;
  }
  var Eu = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ps = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, io = {}, Ar = {};
  function X(e, t, n, r) {
    var s = r;
    typeof r == "string" && (s = function() {
      return this[r]();
    }), e && (Ar[e] = s), t && (Ar[t[0]] = function() {
      return qt(s.apply(this, arguments), t[1], t[2]);
    }), n && (Ar[n] = function() {
      return this.localeData().ordinal(
        s.apply(this, arguments),
        e
      );
    });
  }
  function Y0(e) {
    return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
  }
  function H0(e) {
    var t = e.match(Eu), n, r;
    for (n = 0, r = t.length; n < r; n++)
      Ar[t[n]] ? t[n] = Ar[t[n]] : t[n] = Y0(t[n]);
    return function(s) {
      var i = "", o;
      for (o = 0; o < r; o++)
        i += Gt(t[o]) ? t[o].call(s, e) : t[o];
      return i;
    };
  }
  function zs(e, t) {
    return e.isValid() ? (t = Tc(t, e.localeData()), io[t] = io[t] || H0(t), io[t](e)) : e.localeData().invalidDate();
  }
  function Tc(e, t) {
    var n = 5;
    function r(s) {
      return t.longDateFormat(s) || s;
    }
    for (Ps.lastIndex = 0; n >= 0 && Ps.test(e); )
      e = e.replace(
        Ps,
        r
      ), Ps.lastIndex = 0, n -= 1;
    return e;
  }
  var W0 = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
  };
  function U0(e) {
    var t = this._longDateFormat[e], n = this._longDateFormat[e.toUpperCase()];
    return t || !n ? t : (this._longDateFormat[e] = n.match(Eu).map(function(r) {
      return r === "MMMM" || r === "MM" || r === "DD" || r === "dddd" ? r.slice(1) : r;
    }).join(""), this._longDateFormat[e]);
  }
  var z0 = "Invalid date";
  function q0() {
    return this._invalidDate;
  }
  var K0 = "%d", G0 = /\d{1,2}/;
  function J0(e) {
    return this._ordinal.replace("%d", e);
  }
  var Z0 = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    ss: "%d seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    w: "a week",
    ww: "%d weeks",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
  };
  function Q0(e, t, n, r) {
    var s = this._relativeTime[n];
    return Gt(s) ? s(e, t, n, r) : s.replace(/%d/i, e);
  }
  function X0(e, t) {
    var n = this._relativeTime[e > 0 ? "future" : "past"];
    return Gt(n) ? n(t) : n.replace(/%s/i, t);
  }
  var Xr = {};
  function et(e, t) {
    var n = e.toLowerCase();
    Xr[n] = Xr[n + "s"] = Xr[t] = e;
  }
  function Ft(e) {
    return typeof e == "string" ? Xr[e] || Xr[e.toLowerCase()] : void 0;
  }
  function wu(e) {
    var t = {}, n, r;
    for (r in e)
      _e(e, r) && (n = Ft(r), n && (t[n] = e[r]));
    return t;
  }
  var Mc = {};
  function tt(e, t) {
    Mc[e] = t;
  }
  function em(e) {
    var t = [], n;
    for (n in e)
      _e(e, n) && t.push({ unit: n, priority: Mc[n] });
    return t.sort(function(r, s) {
      return r.priority - s.priority;
    }), t;
  }
  function Si(e) {
    return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0;
  }
  function wt(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }
  function ce(e) {
    var t = +e, n = 0;
    return t !== 0 && isFinite(t) && (n = wt(t)), n;
  }
  function Ir(e, t) {
    return function(n) {
      return n != null ? (Bc(this, e, n), R.updateOffset(this, t), this) : li(this, e);
    };
  }
  function li(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }
  function Bc(e, t, n) {
    e.isValid() && !isNaN(n) && (t === "FullYear" && Si(e.year()) && e.month() === 1 && e.date() === 29 ? (n = ce(n), e._d["set" + (e._isUTC ? "UTC" : "") + t](
      n,
      e.month(),
      Vi(n, e.month())
    )) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }
  function tm(e) {
    return e = Ft(e), Gt(this[e]) ? this[e]() : this;
  }
  function nm(e, t) {
    if (typeof e == "object") {
      e = wu(e);
      var n = em(e), r, s = n.length;
      for (r = 0; r < s; r++)
        this[n[r].unit](e[n[r].unit]);
    } else if (e = Ft(e), Gt(this[e]))
      return this[e](t);
    return this;
  }
  var Ic = /\d/, yt = /\d\d/, Pc = /\d{3}/, Cu = /\d{4}/, Ti = /[+-]?\d{6}/, Fe = /\d\d?/, Vc = /\d\d\d\d?/, $c = /\d\d\d\d\d\d?/, Mi = /\d{1,3}/, xu = /\d{1,4}/, Bi = /[+-]?\d{1,6}/, Pr = /\d+/, Ii = /[+-]?\d+/, rm = /Z|[+-]\d\d:?\d\d/gi, Pi = /Z|[+-]\d\d(?::?\d\d)?/gi, sm = /[+-]?\d+(\.\d{1,3})?/, Es = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i, ci;
  ci = {};
  function W(e, t, n) {
    ci[e] = Gt(t) ? t : function(r, s) {
      return r && n ? n : t;
    };
  }
  function im(e, t) {
    return _e(ci, e) ? ci[e](t._strict, t._locale) : new RegExp(om(e));
  }
  function om(e) {
    return gt(
      e.replace("\\", "").replace(
        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
        function(t, n, r, s, i) {
          return n || r || s || i;
        }
      )
    );
  }
  function gt(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  var Lo = {};
  function Ee(e, t) {
    var n, r = t, s;
    for (typeof e == "string" && (e = [e]), dn(t) && (r = function(i, o) {
      o[t] = ce(i);
    }), s = e.length, n = 0; n < s; n++)
      Lo[e[n]] = r;
  }
  function ws(e, t) {
    Ee(e, function(n, r, s, i) {
      s._w = s._w || {}, t(n, s._w, s, i);
    });
  }
  function um(e, t, n) {
    t != null && _e(Lo, e) && Lo[e](t, n._a, n, e);
  }
  var Xe = 0, sn = 1, Ht = 2, Le = 3, Mt = 4, on = 5, qn = 6, am = 7, lm = 8;
  function cm(e, t) {
    return (e % t + t) % t;
  }
  var Ie;
  Array.prototype.indexOf ? Ie = Array.prototype.indexOf : Ie = function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e)
        return t;
    return -1;
  };
  function Vi(e, t) {
    if (isNaN(e) || isNaN(t))
      return NaN;
    var n = cm(t, 12);
    return e += (t - n) / 12, n === 1 ? Si(e) ? 29 : 28 : 31 - n % 7 % 2;
  }
  X("M", ["MM", 2], "Mo", function() {
    return this.month() + 1;
  });
  X("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e);
  });
  X("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e);
  });
  et("month", "M");
  tt("month", 8);
  W("M", Fe);
  W("MM", Fe, yt);
  W("MMM", function(e, t) {
    return t.monthsShortRegex(e);
  });
  W("MMMM", function(e, t) {
    return t.monthsRegex(e);
  });
  Ee(["M", "MM"], function(e, t) {
    t[sn] = ce(e) - 1;
  });
  Ee(["MMM", "MMMM"], function(e, t, n, r) {
    var s = n._locale.monthsParse(e, r, n._strict);
    s != null ? t[sn] = s : le(n).invalidMonth = e;
  });
  var dm = "January_February_March_April_May_June_July_August_September_October_November_December".split(
    "_"
  ), Rc = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), Lc = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/, fm = Es, hm = Es;
  function pm(e, t) {
    return e ? It(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Lc).test(t) ? "format" : "standalone"][e.month()] : It(this._months) ? this._months : this._months.standalone;
  }
  function mm(e, t) {
    return e ? It(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Lc.test(t) ? "format" : "standalone"][e.month()] : It(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }
  function gm(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._monthsParse)
      for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r)
        i = Kt([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(
          i,
          ""
        ).toLocaleLowerCase(), this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
    return n ? t === "MMM" ? (s = Ie.call(this._shortMonthsParse, o), s !== -1 ? s : null) : (s = Ie.call(this._longMonthsParse, o), s !== -1 ? s : null) : t === "MMM" ? (s = Ie.call(this._shortMonthsParse, o), s !== -1 ? s : (s = Ie.call(this._longMonthsParse, o), s !== -1 ? s : null)) : (s = Ie.call(this._longMonthsParse, o), s !== -1 ? s : (s = Ie.call(this._shortMonthsParse, o), s !== -1 ? s : null));
  }
  function _m(e, t, n) {
    var r, s, i;
    if (this._monthsParseExact)
      return gm.call(this, e, t, n);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) {
      if (s = Kt([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp(
        "^" + this.months(s, "").replace(".", "") + "$",
        "i"
      ), this._shortMonthsParse[r] = new RegExp(
        "^" + this.monthsShort(s, "").replace(".", "") + "$",
        "i"
      )), !n && !this._monthsParse[r] && (i = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "MMMM" && this._longMonthsParse[r].test(e))
        return r;
      if (n && t === "MMM" && this._shortMonthsParse[r].test(e))
        return r;
      if (!n && this._monthsParse[r].test(e))
        return r;
    }
  }
  function jc(e, t) {
    var n;
    if (!e.isValid())
      return e;
    if (typeof t == "string") {
      if (/^\d+$/.test(t))
        t = ce(t);
      else if (t = e.localeData().monthsParse(t), !dn(t))
        return e;
    }
    return n = Math.min(e.date(), Vi(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }
  function Yc(e) {
    return e != null ? (jc(this, e), R.updateOffset(this, !0), this) : li(this, "Month");
  }
  function ym() {
    return Vi(this.year(), this.month());
  }
  function Dm(e) {
    return this._monthsParseExact ? (_e(this, "_monthsRegex") || Hc.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (_e(this, "_monthsShortRegex") || (this._monthsShortRegex = fm), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }
  function bm(e) {
    return this._monthsParseExact ? (_e(this, "_monthsRegex") || Hc.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (_e(this, "_monthsRegex") || (this._monthsRegex = hm), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }
  function Hc() {
    function e(o, u) {
      return u.length - o.length;
    }
    var t = [], n = [], r = [], s, i;
    for (s = 0; s < 12; s++)
      i = Kt([2e3, s]), t.push(this.monthsShort(i, "")), n.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
    for (t.sort(e), n.sort(e), r.sort(e), s = 0; s < 12; s++)
      t[s] = gt(t[s]), n[s] = gt(n[s]);
    for (s = 0; s < 24; s++)
      r[s] = gt(r[s]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._monthsShortStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  X("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? qt(e, 4) : "+" + e;
  });
  X(0, ["YY", 2], 0, function() {
    return this.year() % 100;
  });
  X(0, ["YYYY", 4], 0, "year");
  X(0, ["YYYYY", 5], 0, "year");
  X(0, ["YYYYYY", 6, !0], 0, "year");
  et("year", "y");
  tt("year", 1);
  W("Y", Ii);
  W("YY", Fe, yt);
  W("YYYY", xu, Cu);
  W("YYYYY", Bi, Ti);
  W("YYYYYY", Bi, Ti);
  Ee(["YYYYY", "YYYYYY"], Xe);
  Ee("YYYY", function(e, t) {
    t[Xe] = e.length === 2 ? R.parseTwoDigitYear(e) : ce(e);
  });
  Ee("YY", function(e, t) {
    t[Xe] = R.parseTwoDigitYear(e);
  });
  Ee("Y", function(e, t) {
    t[Xe] = parseInt(e, 10);
  });
  function es(e) {
    return Si(e) ? 366 : 365;
  }
  R.parseTwoDigitYear = function(e) {
    return ce(e) + (ce(e) > 68 ? 1900 : 2e3);
  };
  var Wc = Ir("FullYear", !0);
  function vm() {
    return Si(this.year());
  }
  function Em(e, t, n, r, s, i, o) {
    var u;
    return e < 100 && e >= 0 ? (u = new Date(e + 400, t, n, r, s, i, o), isFinite(u.getFullYear()) && u.setFullYear(e)) : u = new Date(e, t, n, r, s, i, o), u;
  }
  function cs(e) {
    var t, n;
    return e < 100 && e >= 0 ? (n = Array.prototype.slice.call(arguments), n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e)) : t = new Date(Date.UTC.apply(null, arguments)), t;
  }
  function di(e, t, n) {
    var r = 7 + t - n, s = (7 + cs(e, 0, r).getUTCDay() - t) % 7;
    return -s + r - 1;
  }
  function Uc(e, t, n, r, s) {
    var i = (7 + n - r) % 7, o = di(e, r, s), u = 1 + 7 * (t - 1) + i + o, l, d;
    return u <= 0 ? (l = e - 1, d = es(l) + u) : u > es(e) ? (l = e + 1, d = u - es(e)) : (l = e, d = u), {
      year: l,
      dayOfYear: d
    };
  }
  function ds(e, t, n) {
    var r = di(e.year(), t, n), s = Math.floor((e.dayOfYear() - r - 1) / 7) + 1, i, o;
    return s < 1 ? (o = e.year() - 1, i = s + an(o, t, n)) : s > an(e.year(), t, n) ? (i = s - an(e.year(), t, n), o = e.year() + 1) : (o = e.year(), i = s), {
      week: i,
      year: o
    };
  }
  function an(e, t, n) {
    var r = di(e, t, n), s = di(e + 1, t, n);
    return (es(e) - r + s) / 7;
  }
  X("w", ["ww", 2], "wo", "week");
  X("W", ["WW", 2], "Wo", "isoWeek");
  et("week", "w");
  et("isoWeek", "W");
  tt("week", 5);
  tt("isoWeek", 5);
  W("w", Fe);
  W("ww", Fe, yt);
  W("W", Fe);
  W("WW", Fe, yt);
  ws(
    ["w", "ww", "W", "WW"],
    function(e, t, n, r) {
      t[r.substr(0, 1)] = ce(e);
    }
  );
  function wm(e) {
    return ds(e, this._week.dow, this._week.doy).week;
  }
  var Cm = {
    dow: 0,
    // Sunday is the first day of the week.
    doy: 6
    // The week that contains Jan 6th is the first week of the year.
  };
  function xm() {
    return this._week.dow;
  }
  function Am() {
    return this._week.doy;
  }
  function Fm(e) {
    var t = this.localeData().week(this);
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  function km(e) {
    var t = ds(this, 1, 4).week;
    return e == null ? t : this.add((e - t) * 7, "d");
  }
  X("d", 0, "do", "day");
  X("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e);
  });
  X("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e);
  });
  X("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e);
  });
  X("e", 0, 0, "weekday");
  X("E", 0, 0, "isoWeekday");
  et("day", "d");
  et("weekday", "e");
  et("isoWeekday", "E");
  tt("day", 11);
  tt("weekday", 11);
  tt("isoWeekday", 11);
  W("d", Fe);
  W("e", Fe);
  W("E", Fe);
  W("dd", function(e, t) {
    return t.weekdaysMinRegex(e);
  });
  W("ddd", function(e, t) {
    return t.weekdaysShortRegex(e);
  });
  W("dddd", function(e, t) {
    return t.weekdaysRegex(e);
  });
  ws(["dd", "ddd", "dddd"], function(e, t, n, r) {
    var s = n._locale.weekdaysParse(e, r, n._strict);
    s != null ? t.d = s : le(n).invalidWeekday = e;
  });
  ws(["d", "e", "E"], function(e, t, n, r) {
    t[r] = ce(e);
  });
  function Nm(e, t) {
    return typeof e != "string" ? e : isNaN(e) ? (e = t.weekdaysParse(e), typeof e == "number" ? e : null) : parseInt(e, 10);
  }
  function Om(e, t) {
    return typeof e == "string" ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e;
  }
  function Au(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }
  var Sm = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), zc = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), Tm = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), Mm = Es, Bm = Es, Im = Es;
  function Pm(e, t) {
    var n = It(this._weekdays) ? this._weekdays : this._weekdays[e && e !== !0 && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return e === !0 ? Au(n, this._week.dow) : e ? n[e.day()] : n;
  }
  function Vm(e) {
    return e === !0 ? Au(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }
  function $m(e) {
    return e === !0 ? Au(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }
  function Rm(e, t, n) {
    var r, s, i, o = e.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r)
        i = Kt([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(
          i,
          ""
        ).toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(
          i,
          ""
        ).toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
    return n ? t === "dddd" ? (s = Ie.call(this._weekdaysParse, o), s !== -1 ? s : null) : t === "ddd" ? (s = Ie.call(this._shortWeekdaysParse, o), s !== -1 ? s : null) : (s = Ie.call(this._minWeekdaysParse, o), s !== -1 ? s : null) : t === "dddd" ? (s = Ie.call(this._weekdaysParse, o), s !== -1 || (s = Ie.call(this._shortWeekdaysParse, o), s !== -1) ? s : (s = Ie.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : t === "ddd" ? (s = Ie.call(this._shortWeekdaysParse, o), s !== -1 || (s = Ie.call(this._weekdaysParse, o), s !== -1) ? s : (s = Ie.call(this._minWeekdaysParse, o), s !== -1 ? s : null)) : (s = Ie.call(this._minWeekdaysParse, o), s !== -1 || (s = Ie.call(this._weekdaysParse, o), s !== -1) ? s : (s = Ie.call(this._shortWeekdaysParse, o), s !== -1 ? s : null));
  }
  function Lm(e, t, n) {
    var r, s, i;
    if (this._weekdaysParseExact)
      return Rm.call(this, e, t, n);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) {
      if (s = Kt([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp(
        "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._shortWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysShort(s, "").replace(".", "\\.?") + "$",
        "i"
      ), this._minWeekdaysParse[r] = new RegExp(
        "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
        "i"
      )), this._weekdaysParse[r] || (i = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[r] = new RegExp(i.replace(".", ""), "i")), n && t === "dddd" && this._fullWeekdaysParse[r].test(e))
        return r;
      if (n && t === "ddd" && this._shortWeekdaysParse[r].test(e))
        return r;
      if (n && t === "dd" && this._minWeekdaysParse[r].test(e))
        return r;
      if (!n && this._weekdaysParse[r].test(e))
        return r;
    }
  }
  function jm(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return e != null ? (e = Nm(e, this.localeData()), this.add(e - t, "d")) : t;
  }
  function Ym(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return e == null ? t : this.add(e - t, "d");
  }
  function Hm(e) {
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      var t = Om(e, this.localeData());
      return this.day(this.day() % 7 ? t : t - 7);
    } else
      return this.day() || 7;
  }
  function Wm(e) {
    return this._weekdaysParseExact ? (_e(this, "_weekdaysRegex") || Fu.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (_e(this, "_weekdaysRegex") || (this._weekdaysRegex = Mm), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }
  function Um(e) {
    return this._weekdaysParseExact ? (_e(this, "_weekdaysRegex") || Fu.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (_e(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Bm), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }
  function zm(e) {
    return this._weekdaysParseExact ? (_e(this, "_weekdaysRegex") || Fu.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (_e(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Im), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }
  function Fu() {
    function e(a, c) {
      return c.length - a.length;
    }
    var t = [], n = [], r = [], s = [], i, o, u, l, d;
    for (i = 0; i < 7; i++)
      o = Kt([2e3, 1]).day(i), u = gt(this.weekdaysMin(o, "")), l = gt(this.weekdaysShort(o, "")), d = gt(this.weekdays(o, "")), t.push(u), n.push(l), r.push(d), s.push(u), s.push(l), s.push(d);
    t.sort(e), n.sort(e), r.sort(e), s.sort(e), this._weekdaysRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp(
      "^(" + r.join("|") + ")",
      "i"
    ), this._weekdaysShortStrictRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    ), this._weekdaysMinStrictRegex = new RegExp(
      "^(" + t.join("|") + ")",
      "i"
    );
  }
  function ku() {
    return this.hours() % 12 || 12;
  }
  function qm() {
    return this.hours() || 24;
  }
  X("H", ["HH", 2], 0, "hour");
  X("h", ["hh", 2], 0, ku);
  X("k", ["kk", 2], 0, qm);
  X("hmm", 0, 0, function() {
    return "" + ku.apply(this) + qt(this.minutes(), 2);
  });
  X("hmmss", 0, 0, function() {
    return "" + ku.apply(this) + qt(this.minutes(), 2) + qt(this.seconds(), 2);
  });
  X("Hmm", 0, 0, function() {
    return "" + this.hours() + qt(this.minutes(), 2);
  });
  X("Hmmss", 0, 0, function() {
    return "" + this.hours() + qt(this.minutes(), 2) + qt(this.seconds(), 2);
  });
  function qc(e, t) {
    X(e, 0, 0, function() {
      return this.localeData().meridiem(
        this.hours(),
        this.minutes(),
        t
      );
    });
  }
  qc("a", !0);
  qc("A", !1);
  et("hour", "h");
  tt("hour", 13);
  function Kc(e, t) {
    return t._meridiemParse;
  }
  W("a", Kc);
  W("A", Kc);
  W("H", Fe);
  W("h", Fe);
  W("k", Fe);
  W("HH", Fe, yt);
  W("hh", Fe, yt);
  W("kk", Fe, yt);
  W("hmm", Vc);
  W("hmmss", $c);
  W("Hmm", Vc);
  W("Hmmss", $c);
  Ee(["H", "HH"], Le);
  Ee(["k", "kk"], function(e, t, n) {
    var r = ce(e);
    t[Le] = r === 24 ? 0 : r;
  });
  Ee(["a", "A"], function(e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  });
  Ee(["h", "hh"], function(e, t, n) {
    t[Le] = ce(e), le(n).bigHour = !0;
  });
  Ee("hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Le] = ce(e.substr(0, r)), t[Mt] = ce(e.substr(r)), le(n).bigHour = !0;
  });
  Ee("hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[Le] = ce(e.substr(0, r)), t[Mt] = ce(e.substr(r, 2)), t[on] = ce(e.substr(s)), le(n).bigHour = !0;
  });
  Ee("Hmm", function(e, t, n) {
    var r = e.length - 2;
    t[Le] = ce(e.substr(0, r)), t[Mt] = ce(e.substr(r));
  });
  Ee("Hmmss", function(e, t, n) {
    var r = e.length - 4, s = e.length - 2;
    t[Le] = ce(e.substr(0, r)), t[Mt] = ce(e.substr(r, 2)), t[on] = ce(e.substr(s));
  });
  function Km(e) {
    return (e + "").toLowerCase().charAt(0) === "p";
  }
  var Gm = /[ap]\.?m?\.?/i, Jm = Ir("Hours", !0);
  function Zm(e, t, n) {
    return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM";
  }
  var Gc = {
    calendar: L0,
    longDateFormat: W0,
    invalidDate: z0,
    ordinal: K0,
    dayOfMonthOrdinalParse: G0,
    relativeTime: Z0,
    months: dm,
    monthsShort: Rc,
    week: Cm,
    weekdays: Sm,
    weekdaysMin: Tm,
    weekdaysShort: zc,
    meridiemParse: Gm
  }, Ne = {}, Hr = {}, fs;
  function Qm(e, t) {
    var n, r = Math.min(e.length, t.length);
    for (n = 0; n < r; n += 1)
      if (e[n] !== t[n])
        return n;
    return r;
  }
  function ja(e) {
    return e && e.toLowerCase().replace("_", "-");
  }
  function Xm(e) {
    for (var t = 0, n, r, s, i; t < e.length; ) {
      for (i = ja(e[t]).split("-"), n = i.length, r = ja(e[t + 1]), r = r ? r.split("-") : null; n > 0; ) {
        if (s = $i(i.slice(0, n).join("-")), s)
          return s;
        if (r && r.length >= n && Qm(i, r) >= n - 1)
          break;
        n--;
      }
      t++;
    }
    return fs;
  }
  function eg(e) {
    return e.match("^[^/\\\\]*$") != null;
  }
  function $i(e) {
    var t = null, n;
    if (Ne[e] === void 0 && typeof Gs < "u" && Gs && Gs.exports && eg(e))
      try {
        t = fs._abbr, n = require, n("./locale/" + e), kn(t);
      } catch {
        Ne[e] = null;
      }
    return Ne[e];
  }
  function kn(e, t) {
    var n;
    return e && (ft(t) ? n = hn(e) : n = Nu(e, t), n ? fs = n : typeof console < "u" && console.warn && console.warn(
      "Locale " + e + " not found. Did you forget to load it?"
    )), fs._abbr;
  }
  function Nu(e, t) {
    if (t !== null) {
      var n, r = Gc;
      if (t.abbr = e, Ne[e] != null)
        Sc(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ), r = Ne[e]._config;
      else if (t.parentLocale != null)
        if (Ne[t.parentLocale] != null)
          r = Ne[t.parentLocale]._config;
        else if (n = $i(t.parentLocale), n != null)
          r = n._config;
        else
          return Hr[t.parentLocale] || (Hr[t.parentLocale] = []), Hr[t.parentLocale].push({
            name: e,
            config: t
          }), null;
      return Ne[e] = new vu($o(r, t)), Hr[e] && Hr[e].forEach(function(s) {
        Nu(s.name, s.config);
      }), kn(e), Ne[e];
    } else
      return delete Ne[e], null;
  }
  function tg(e, t) {
    if (t != null) {
      var n, r, s = Gc;
      Ne[e] != null && Ne[e].parentLocale != null ? Ne[e].set($o(Ne[e]._config, t)) : (r = $i(e), r != null && (s = r._config), t = $o(s, t), r == null && (t.abbr = e), n = new vu(t), n.parentLocale = Ne[e], Ne[e] = n), kn(e);
    } else
      Ne[e] != null && (Ne[e].parentLocale != null ? (Ne[e] = Ne[e].parentLocale, e === kn() && kn(e)) : Ne[e] != null && delete Ne[e]);
    return Ne[e];
  }
  function hn(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
      return fs;
    if (!It(e)) {
      if (t = $i(e), t)
        return t;
      e = [e];
    }
    return Xm(e);
  }
  function ng() {
    return Ro(Ne);
  }
  function Ou(e) {
    var t, n = e._a;
    return n && le(e).overflow === -2 && (t = n[sn] < 0 || n[sn] > 11 ? sn : n[Ht] < 1 || n[Ht] > Vi(n[Xe], n[sn]) ? Ht : n[Le] < 0 || n[Le] > 24 || n[Le] === 24 && (n[Mt] !== 0 || n[on] !== 0 || n[qn] !== 0) ? Le : n[Mt] < 0 || n[Mt] > 59 ? Mt : n[on] < 0 || n[on] > 59 ? on : n[qn] < 0 || n[qn] > 999 ? qn : -1, le(e)._overflowDayOfYear && (t < Xe || t > Ht) && (t = Ht), le(e)._overflowWeeks && t === -1 && (t = am), le(e)._overflowWeekday && t === -1 && (t = lm), le(e).overflow = t), e;
  }
  var rg = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, sg = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ig = /Z|[+-]\d\d(?::?\d\d)?/, Vs = [
    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
    ["YYYY-DDD", /\d{4}-\d{3}/],
    ["YYYY-MM", /\d{4}-\d\d/, !1],
    ["YYYYYYMMDD", /[+-]\d{10}/],
    ["YYYYMMDD", /\d{8}/],
    ["GGGG[W]WWE", /\d{4}W\d{3}/],
    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
    ["YYYYDDD", /\d{7}/],
    ["YYYYMM", /\d{6}/, !1],
    ["YYYY", /\d{4}/, !1]
  ], oo = [
    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
    ["HH:mm", /\d\d:\d\d/],
    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
    ["HHmmss", /\d\d\d\d\d\d/],
    ["HHmm", /\d\d\d\d/],
    ["HH", /\d\d/]
  ], og = /^\/?Date\((-?\d+)/i, ug = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/, ag = {
    UT: 0,
    GMT: 0,
    EDT: -4 * 60,
    EST: -5 * 60,
    CDT: -5 * 60,
    CST: -6 * 60,
    MDT: -6 * 60,
    MST: -7 * 60,
    PDT: -7 * 60,
    PST: -8 * 60
  };
  function Jc(e) {
    var t, n, r = e._i, s = rg.exec(r) || sg.exec(r), i, o, u, l, d = Vs.length, a = oo.length;
    if (s) {
      for (le(e).iso = !0, t = 0, n = d; t < n; t++)
        if (Vs[t][1].exec(s[1])) {
          o = Vs[t][0], i = Vs[t][2] !== !1;
          break;
        }
      if (o == null) {
        e._isValid = !1;
        return;
      }
      if (s[3]) {
        for (t = 0, n = a; t < n; t++)
          if (oo[t][1].exec(s[3])) {
            u = (s[2] || " ") + oo[t][0];
            break;
          }
        if (u == null) {
          e._isValid = !1;
          return;
        }
      }
      if (!i && u != null) {
        e._isValid = !1;
        return;
      }
      if (s[4])
        if (ig.exec(s[4]))
          l = "Z";
        else {
          e._isValid = !1;
          return;
        }
      e._f = o + (u || "") + (l || ""), Tu(e);
    } else
      e._isValid = !1;
  }
  function lg(e, t, n, r, s, i) {
    var o = [
      cg(e),
      Rc.indexOf(t),
      parseInt(n, 10),
      parseInt(r, 10),
      parseInt(s, 10)
    ];
    return i && o.push(parseInt(i, 10)), o;
  }
  function cg(e) {
    var t = parseInt(e, 10);
    return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
  }
  function dg(e) {
    return e.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "");
  }
  function fg(e, t, n) {
    if (e) {
      var r = zc.indexOf(e), s = new Date(
        t[0],
        t[1],
        t[2]
      ).getDay();
      if (r !== s)
        return le(n).weekdayMismatch = !0, n._isValid = !1, !1;
    }
    return !0;
  }
  function hg(e, t, n) {
    if (e)
      return ag[e];
    if (t)
      return 0;
    var r = parseInt(n, 10), s = r % 100, i = (r - s) / 100;
    return i * 60 + s;
  }
  function Zc(e) {
    var t = ug.exec(dg(e._i)), n;
    if (t) {
      if (n = lg(
        t[4],
        t[3],
        t[2],
        t[5],
        t[6],
        t[7]
      ), !fg(t[1], n, e))
        return;
      e._a = n, e._tzm = hg(t[8], t[9], t[10]), e._d = cs.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), le(e).rfc2822 = !0;
    } else
      e._isValid = !1;
  }
  function pg(e) {
    var t = og.exec(e._i);
    if (t !== null) {
      e._d = /* @__PURE__ */ new Date(+t[1]);
      return;
    }
    if (Jc(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    if (Zc(e), e._isValid === !1)
      delete e._isValid;
    else
      return;
    e._strict ? e._isValid = !1 : R.createFromInputFallback(e);
  }
  R.createFromInputFallback = At(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function(e) {
      e._d = /* @__PURE__ */ new Date(e._i + (e._useUTC ? " UTC" : ""));
    }
  );
  function Dr(e, t, n) {
    return e ?? t ?? n;
  }
  function mg(e) {
    var t = new Date(R.now());
    return e._useUTC ? [
      t.getUTCFullYear(),
      t.getUTCMonth(),
      t.getUTCDate()
    ] : [t.getFullYear(), t.getMonth(), t.getDate()];
  }
  function Su(e) {
    var t, n, r = [], s, i, o;
    if (!e._d) {
      for (s = mg(e), e._w && e._a[Ht] == null && e._a[sn] == null && gg(e), e._dayOfYear != null && (o = Dr(e._a[Xe], s[Xe]), (e._dayOfYear > es(o) || e._dayOfYear === 0) && (le(e)._overflowDayOfYear = !0), n = cs(o, 0, e._dayOfYear), e._a[sn] = n.getUTCMonth(), e._a[Ht] = n.getUTCDate()), t = 0; t < 3 && e._a[t] == null; ++t)
        e._a[t] = r[t] = s[t];
      for (; t < 7; t++)
        e._a[t] = r[t] = e._a[t] == null ? t === 2 ? 1 : 0 : e._a[t];
      e._a[Le] === 24 && e._a[Mt] === 0 && e._a[on] === 0 && e._a[qn] === 0 && (e._nextDay = !0, e._a[Le] = 0), e._d = (e._useUTC ? cs : Em).apply(
        null,
        r
      ), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), e._tzm != null && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Le] = 24), e._w && typeof e._w.d < "u" && e._w.d !== i && (le(e).weekdayMismatch = !0);
    }
  }
  function gg(e) {
    var t, n, r, s, i, o, u, l, d;
    t = e._w, t.GG != null || t.W != null || t.E != null ? (i = 1, o = 4, n = Dr(
      t.GG,
      e._a[Xe],
      ds(Ae(), 1, 4).year
    ), r = Dr(t.W, 1), s = Dr(t.E, 1), (s < 1 || s > 7) && (l = !0)) : (i = e._locale._week.dow, o = e._locale._week.doy, d = ds(Ae(), i, o), n = Dr(t.gg, e._a[Xe], d.year), r = Dr(t.w, d.week), t.d != null ? (s = t.d, (s < 0 || s > 6) && (l = !0)) : t.e != null ? (s = t.e + i, (t.e < 0 || t.e > 6) && (l = !0)) : s = i), r < 1 || r > an(n, i, o) ? le(e)._overflowWeeks = !0 : l != null ? le(e)._overflowWeekday = !0 : (u = Uc(n, r, s, i, o), e._a[Xe] = u.year, e._dayOfYear = u.dayOfYear);
  }
  R.ISO_8601 = function() {
  };
  R.RFC_2822 = function() {
  };
  function Tu(e) {
    if (e._f === R.ISO_8601) {
      Jc(e);
      return;
    }
    if (e._f === R.RFC_2822) {
      Zc(e);
      return;
    }
    e._a = [], le(e).empty = !0;
    var t = "" + e._i, n, r, s, i, o, u = t.length, l = 0, d, a;
    for (s = Tc(e._f, e._locale).match(Eu) || [], a = s.length, n = 0; n < a; n++)
      i = s[n], r = (t.match(im(i, e)) || [])[0], r && (o = t.substr(0, t.indexOf(r)), o.length > 0 && le(e).unusedInput.push(o), t = t.slice(
        t.indexOf(r) + r.length
      ), l += r.length), Ar[i] ? (r ? le(e).empty = !1 : le(e).unusedTokens.push(i), um(i, r, e)) : e._strict && !r && le(e).unusedTokens.push(i);
    le(e).charsLeftOver = u - l, t.length > 0 && le(e).unusedInput.push(t), e._a[Le] <= 12 && le(e).bigHour === !0 && e._a[Le] > 0 && (le(e).bigHour = void 0), le(e).parsedDateParts = e._a.slice(0), le(e).meridiem = e._meridiem, e._a[Le] = _g(
      e._locale,
      e._a[Le],
      e._meridiem
    ), d = le(e).era, d !== null && (e._a[Xe] = e._locale.erasConvertYear(d, e._a[Xe])), Su(e), Ou(e);
  }
  function _g(e, t, n) {
    var r;
    return n == null ? t : e.meridiemHour != null ? e.meridiemHour(t, n) : (e.isPM != null && (r = e.isPM(n), r && t < 12 && (t += 12), !r && t === 12 && (t = 0)), t);
  }
  function yg(e) {
    var t, n, r, s, i, o, u = !1, l = e._f.length;
    if (l === 0) {
      le(e).invalidFormat = !0, e._d = /* @__PURE__ */ new Date(NaN);
      return;
    }
    for (s = 0; s < l; s++)
      i = 0, o = !1, t = bu({}, e), e._useUTC != null && (t._useUTC = e._useUTC), t._f = e._f[s], Tu(t), Du(t) && (o = !0), i += le(t).charsLeftOver, i += le(t).unusedTokens.length * 10, le(t).score = i, u ? i < r && (r = i, n = t) : (r == null || i < r || o) && (r = i, n = t, o && (u = !0));
    xn(e, n || t);
  }
  function Dg(e) {
    if (!e._d) {
      var t = wu(e._i), n = t.day === void 0 ? t.date : t.day;
      e._a = Nc(
        [t.year, t.month, n, t.hour, t.minute, t.second, t.millisecond],
        function(r) {
          return r && parseInt(r, 10);
        }
      ), Su(e);
    }
  }
  function bg(e) {
    var t = new vs(Ou(Qc(e)));
    return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t;
  }
  function Qc(e) {
    var t = e._i, n = e._f;
    return e._locale = e._locale || hn(e._l), t === null || n === void 0 && t === "" ? Oi({ nullInput: !0 }) : (typeof t == "string" && (e._i = t = e._locale.preparse(t)), Pt(t) ? new vs(Ou(t)) : (bs(t) ? e._d = t : It(n) ? yg(e) : n ? Tu(e) : vg(e), Du(e) || (e._d = null), e));
  }
  function vg(e) {
    var t = e._i;
    ft(t) ? e._d = new Date(R.now()) : bs(t) ? e._d = new Date(t.valueOf()) : typeof t == "string" ? pg(e) : It(t) ? (e._a = Nc(t.slice(0), function(n) {
      return parseInt(n, 10);
    }), Su(e)) : tr(t) ? Dg(e) : dn(t) ? e._d = new Date(t) : R.createFromInputFallback(e);
  }
  function Xc(e, t, n, r, s) {
    var i = {};
    return (t === !0 || t === !1) && (r = t, t = void 0), (n === !0 || n === !1) && (r = n, n = void 0), (tr(e) && yu(e) || It(e) && e.length === 0) && (e = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = s, i._l = n, i._i = e, i._f = t, i._strict = r, bg(i);
  }
  function Ae(e, t, n, r) {
    return Xc(e, t, n, r, !1);
  }
  var Eg = At(
    "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = Ae.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : Oi();
    }
  ), wg = At(
    "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
    function() {
      var e = Ae.apply(null, arguments);
      return this.isValid() && e.isValid() ? e > this ? this : e : Oi();
    }
  );
  function ed(e, t) {
    var n, r;
    if (t.length === 1 && It(t[0]) && (t = t[0]), !t.length)
      return Ae();
    for (n = t[0], r = 1; r < t.length; ++r)
      (!t[r].isValid() || t[r][e](n)) && (n = t[r]);
    return n;
  }
  function Cg() {
    var e = [].slice.call(arguments, 0);
    return ed("isBefore", e);
  }
  function xg() {
    var e = [].slice.call(arguments, 0);
    return ed("isAfter", e);
  }
  var Ag = function() {
    return Date.now ? Date.now() : +/* @__PURE__ */ new Date();
  }, Wr = [
    "year",
    "quarter",
    "month",
    "week",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ];
  function Fg(e) {
    var t, n = !1, r, s = Wr.length;
    for (t in e)
      if (_e(e, t) && !(Ie.call(Wr, t) !== -1 && (e[t] == null || !isNaN(e[t]))))
        return !1;
    for (r = 0; r < s; ++r)
      if (e[Wr[r]]) {
        if (n)
          return !1;
        parseFloat(e[Wr[r]]) !== ce(e[Wr[r]]) && (n = !0);
      }
    return !0;
  }
  function kg() {
    return this._isValid;
  }
  function Ng() {
    return $t(NaN);
  }
  function Ri(e) {
    var t = wu(e), n = t.year || 0, r = t.quarter || 0, s = t.month || 0, i = t.week || t.isoWeek || 0, o = t.day || 0, u = t.hour || 0, l = t.minute || 0, d = t.second || 0, a = t.millisecond || 0;
    this._isValid = Fg(t), this._milliseconds = +a + d * 1e3 + // 1000
    l * 6e4 + // 1000 * 60
    u * 1e3 * 60 * 60, this._days = +o + i * 7, this._months = +s + r * 3 + n * 12, this._data = {}, this._locale = hn(), this._bubble();
  }
  function qs(e) {
    return e instanceof Ri;
  }
  function jo(e) {
    return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e);
  }
  function Og(e, t, n) {
    var r = Math.min(e.length, t.length), s = Math.abs(e.length - t.length), i = 0, o;
    for (o = 0; o < r; o++)
      (n && e[o] !== t[o] || !n && ce(e[o]) !== ce(t[o])) && i++;
    return i + s;
  }
  function td(e, t) {
    X(e, 0, 0, function() {
      var n = this.utcOffset(), r = "+";
      return n < 0 && (n = -n, r = "-"), r + qt(~~(n / 60), 2) + t + qt(~~n % 60, 2);
    });
  }
  td("Z", ":");
  td("ZZ", "");
  W("Z", Pi);
  W("ZZ", Pi);
  Ee(["Z", "ZZ"], function(e, t, n) {
    n._useUTC = !0, n._tzm = Mu(Pi, e);
  });
  var Sg = /([\+\-]|\d\d)/gi;
  function Mu(e, t) {
    var n = (t || "").match(e), r, s, i;
    return n === null ? null : (r = n[n.length - 1] || [], s = (r + "").match(Sg) || ["-", 0, 0], i = +(s[1] * 60) + ce(s[2]), i === 0 ? 0 : s[0] === "+" ? i : -i);
  }
  function Bu(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(), r = (Pt(e) || bs(e) ? e.valueOf() : Ae(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), R.updateOffset(n, !1), n) : Ae(e).local();
  }
  function Yo(e) {
    return -Math.round(e._d.getTimezoneOffset());
  }
  R.updateOffset = function() {
  };
  function Tg(e, t, n) {
    var r = this._offset || 0, s;
    if (!this.isValid())
      return e != null ? this : NaN;
    if (e != null) {
      if (typeof e == "string") {
        if (e = Mu(Pi, e), e === null)
          return this;
      } else
        Math.abs(e) < 16 && !n && (e = e * 60);
      return !this._isUTC && t && (s = Yo(this)), this._offset = e, this._isUTC = !0, s != null && this.add(s, "m"), r !== e && (!t || this._changeInProgress ? sd(
        this,
        $t(e - r, "m"),
        1,
        !1
      ) : this._changeInProgress || (this._changeInProgress = !0, R.updateOffset(this, !0), this._changeInProgress = null)), this;
    } else
      return this._isUTC ? r : Yo(this);
  }
  function Mg(e, t) {
    return e != null ? (typeof e != "string" && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }
  function Bg(e) {
    return this.utcOffset(0, e);
  }
  function Ig(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Yo(this), "m")), this;
  }
  function Pg() {
    if (this._tzm != null)
      this.utcOffset(this._tzm, !1, !0);
    else if (typeof this._i == "string") {
      var e = Mu(rm, this._i);
      e != null ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }
  function Vg(e) {
    return this.isValid() ? (e = e ? Ae(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1;
  }
  function $g() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }
  function Rg() {
    if (!ft(this._isDSTShifted))
      return this._isDSTShifted;
    var e = {}, t;
    return bu(e, this), e = Qc(e), e._a ? (t = e._isUTC ? Kt(e._a) : Ae(e._a), this._isDSTShifted = this.isValid() && Og(e._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted;
  }
  function Lg() {
    return this.isValid() ? !this._isUTC : !1;
  }
  function jg() {
    return this.isValid() ? this._isUTC : !1;
  }
  function nd() {
    return this.isValid() ? this._isUTC && this._offset === 0 : !1;
  }
  var Yg = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/, Hg = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  function $t(e, t) {
    var n = e, r = null, s, i, o;
    return qs(e) ? n = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : dn(e) || !isNaN(+e) ? (n = {}, t ? n[t] = +e : n.milliseconds = +e) : (r = Yg.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: 0,
      d: ce(r[Ht]) * s,
      h: ce(r[Le]) * s,
      m: ce(r[Mt]) * s,
      s: ce(r[on]) * s,
      ms: ce(jo(r[qn] * 1e3)) * s
      // the millisecond decimal point is included in the match
    }) : (r = Hg.exec(e)) ? (s = r[1] === "-" ? -1 : 1, n = {
      y: Rn(r[2], s),
      M: Rn(r[3], s),
      w: Rn(r[4], s),
      d: Rn(r[5], s),
      h: Rn(r[6], s),
      m: Rn(r[7], s),
      s: Rn(r[8], s)
    }) : n == null ? n = {} : typeof n == "object" && ("from" in n || "to" in n) && (o = Wg(
      Ae(n.from),
      Ae(n.to)
    ), n = {}, n.ms = o.milliseconds, n.M = o.months), i = new Ri(n), qs(e) && _e(e, "_locale") && (i._locale = e._locale), qs(e) && _e(e, "_isValid") && (i._isValid = e._isValid), i;
  }
  $t.fn = Ri.prototype;
  $t.invalid = Ng;
  function Rn(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }
  function Ya(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + (t.year() - e.year()) * 12, e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }
  function Wg(e, t) {
    var n;
    return e.isValid() && t.isValid() ? (t = Bu(t, e), e.isBefore(t) ? n = Ya(e, t) : (n = Ya(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 };
  }
  function rd(e, t) {
    return function(n, r) {
      var s, i;
      return r !== null && !isNaN(+r) && (Sc(
        t,
        "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
      ), i = n, n = r, r = i), s = $t(n, r), sd(this, s, e), this;
    };
  }
  function sd(e, t, n, r) {
    var s = t._milliseconds, i = jo(t._days), o = jo(t._months);
    e.isValid() && (r = r ?? !0, o && jc(e, li(e, "Month") + o * n), i && Bc(e, "Date", li(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && R.updateOffset(e, i || o));
  }
  var Ug = rd(1, "add"), zg = rd(-1, "subtract");
  function id(e) {
    return typeof e == "string" || e instanceof String;
  }
  function qg(e) {
    return Pt(e) || bs(e) || id(e) || dn(e) || Gg(e) || Kg(e) || e === null || e === void 0;
  }
  function Kg(e) {
    var t = tr(e) && !yu(e), n = !1, r = [
      "years",
      "year",
      "y",
      "months",
      "month",
      "M",
      "days",
      "day",
      "d",
      "dates",
      "date",
      "D",
      "hours",
      "hour",
      "h",
      "minutes",
      "minute",
      "m",
      "seconds",
      "second",
      "s",
      "milliseconds",
      "millisecond",
      "ms"
    ], s, i, o = r.length;
    for (s = 0; s < o; s += 1)
      i = r[s], n = n || _e(e, i);
    return t && n;
  }
  function Gg(e) {
    var t = It(e), n = !1;
    return t && (n = e.filter(function(r) {
      return !dn(r) && id(e);
    }).length === 0), t && n;
  }
  function Jg(e) {
    var t = tr(e) && !yu(e), n = !1, r = [
      "sameDay",
      "nextDay",
      "lastDay",
      "nextWeek",
      "lastWeek",
      "sameElse"
    ], s, i;
    for (s = 0; s < r.length; s += 1)
      i = r[s], n = n || _e(e, i);
    return t && n;
  }
  function Zg(e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }
  function Qg(e, t) {
    arguments.length === 1 && (arguments[0] ? qg(arguments[0]) ? (e = arguments[0], t = void 0) : Jg(arguments[0]) && (t = arguments[0], e = void 0) : (e = void 0, t = void 0));
    var n = e || Ae(), r = Bu(n, this).startOf("day"), s = R.calendarFormat(this, r) || "sameElse", i = t && (Gt(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(
      i || this.localeData().calendar(s, this, Ae(n))
    );
  }
  function Xg() {
    return new vs(this);
  }
  function e_(e, t) {
    var n = Pt(e) ? e : Ae(e);
    return this.isValid() && n.isValid() ? (t = Ft(t) || "millisecond", t === "millisecond" ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1;
  }
  function t_(e, t) {
    var n = Pt(e) ? e : Ae(e);
    return this.isValid() && n.isValid() ? (t = Ft(t) || "millisecond", t === "millisecond" ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1;
  }
  function n_(e, t, n, r) {
    var s = Pt(e) ? e : Ae(e), i = Pt(t) ? t : Ae(t);
    return this.isValid() && s.isValid() && i.isValid() ? (r = r || "()", (r[0] === "(" ? this.isAfter(s, n) : !this.isBefore(s, n)) && (r[1] === ")" ? this.isBefore(i, n) : !this.isAfter(i, n))) : !1;
  }
  function r_(e, t) {
    var n = Pt(e) ? e : Ae(e), r;
    return this.isValid() && n.isValid() ? (t = Ft(t) || "millisecond", t === "millisecond" ? this.valueOf() === n.valueOf() : (r = n.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1;
  }
  function s_(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }
  function i_(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }
  function o_(e, t, n) {
    var r, s, i;
    if (!this.isValid())
      return NaN;
    if (r = Bu(e, this), !r.isValid())
      return NaN;
    switch (s = (r.utcOffset() - this.utcOffset()) * 6e4, t = Ft(t), t) {
      case "year":
        i = Ks(this, r) / 12;
        break;
      case "month":
        i = Ks(this, r);
        break;
      case "quarter":
        i = Ks(this, r) / 3;
        break;
      case "second":
        i = (this - r) / 1e3;
        break;
      case "minute":
        i = (this - r) / 6e4;
        break;
      case "hour":
        i = (this - r) / 36e5;
        break;
      case "day":
        i = (this - r - s) / 864e5;
        break;
      case "week":
        i = (this - r - s) / 6048e5;
        break;
      default:
        i = this - r;
    }
    return n ? i : wt(i);
  }
  function Ks(e, t) {
    if (e.date() < t.date())
      return -Ks(t, e);
    var n = (t.year() - e.year()) * 12 + (t.month() - e.month()), r = e.clone().add(n, "months"), s, i;
    return t - r < 0 ? (s = e.clone().add(n - 1, "months"), i = (t - r) / (r - s)) : (s = e.clone().add(n + 1, "months"), i = (t - r) / (s - r)), -(n + i) || 0;
  }
  R.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
  R.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  function u_() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function a_(e) {
    if (!this.isValid())
      return null;
    var t = e !== !0, n = t ? this.clone().utc() : this;
    return n.year() < 0 || n.year() > 9999 ? zs(
      n,
      t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
    ) : Gt(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3).toISOString().replace("Z", zs(n, "Z")) : zs(
      n,
      t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
    );
  }
  function l_() {
    if (!this.isValid())
      return "moment.invalid(/* " + this._i + " */)";
    var e = "moment", t = "", n, r, s, i;
    return this.isLocal() || (e = this.utcOffset() === 0 ? "moment.utc" : "moment.parseZone", t = "Z"), n = "[" + e + '("]', r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY", s = "-MM-DD[T]HH:mm:ss.SSS", i = t + '[")]', this.format(n + r + s + i);
  }
  function c_(e) {
    e || (e = this.isUtc() ? R.defaultFormatUtc : R.defaultFormat);
    var t = zs(this, e);
    return this.localeData().postformat(t);
  }
  function d_(e, t) {
    return this.isValid() && (Pt(e) && e.isValid() || Ae(e).isValid()) ? $t({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function f_(e) {
    return this.from(Ae(), e);
  }
  function h_(e, t) {
    return this.isValid() && (Pt(e) && e.isValid() || Ae(e).isValid()) ? $t({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }
  function p_(e) {
    return this.to(Ae(), e);
  }
  function od(e) {
    var t;
    return e === void 0 ? this._locale._abbr : (t = hn(e), t != null && (this._locale = t), this);
  }
  var ud = At(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function(e) {
      return e === void 0 ? this.localeData() : this.locale(e);
    }
  );
  function ad() {
    return this._locale;
  }
  var fi = 1e3, Fr = 60 * fi, hi = 60 * Fr, ld = (365 * 400 + 97) * 24 * hi;
  function kr(e, t) {
    return (e % t + t) % t;
  }
  function cd(e, t, n) {
    return e < 100 && e >= 0 ? new Date(e + 400, t, n) - ld : new Date(e, t, n).valueOf();
  }
  function dd(e, t, n) {
    return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - ld : Date.UTC(e, t, n);
  }
  function m_(e) {
    var t, n;
    if (e = Ft(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? dd : cd, e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3,
          1
        );
        break;
      case "month":
        t = n(this.year(), this.month(), 1);
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday()
        );
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1)
        );
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;
      case "hour":
        t = this._d.valueOf(), t -= kr(
          t + (this._isUTC ? 0 : this.utcOffset() * Fr),
          hi
        );
        break;
      case "minute":
        t = this._d.valueOf(), t -= kr(t, Fr);
        break;
      case "second":
        t = this._d.valueOf(), t -= kr(t, fi);
        break;
    }
    return this._d.setTime(t), R.updateOffset(this, !0), this;
  }
  function g_(e) {
    var t, n;
    if (e = Ft(e), e === void 0 || e === "millisecond" || !this.isValid())
      return this;
    switch (n = this._isUTC ? dd : cd, e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;
      case "quarter":
        t = n(
          this.year(),
          this.month() - this.month() % 3 + 3,
          1
        ) - 1;
        break;
      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;
      case "week":
        t = n(
          this.year(),
          this.month(),
          this.date() - this.weekday() + 7
        ) - 1;
        break;
      case "isoWeek":
        t = n(
          this.year(),
          this.month(),
          this.date() - (this.isoWeekday() - 1) + 7
        ) - 1;
        break;
      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;
      case "hour":
        t = this._d.valueOf(), t += hi - kr(
          t + (this._isUTC ? 0 : this.utcOffset() * Fr),
          hi
        ) - 1;
        break;
      case "minute":
        t = this._d.valueOf(), t += Fr - kr(t, Fr) - 1;
        break;
      case "second":
        t = this._d.valueOf(), t += fi - kr(t, fi) - 1;
        break;
    }
    return this._d.setTime(t), R.updateOffset(this, !0), this;
  }
  function __() {
    return this._d.valueOf() - (this._offset || 0) * 6e4;
  }
  function y_() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function D_() {
    return new Date(this.valueOf());
  }
  function b_() {
    var e = this;
    return [
      e.year(),
      e.month(),
      e.date(),
      e.hour(),
      e.minute(),
      e.second(),
      e.millisecond()
    ];
  }
  function v_() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }
  function E_() {
    return this.isValid() ? this.toISOString() : null;
  }
  function w_() {
    return Du(this);
  }
  function C_() {
    return xn({}, le(this));
  }
  function x_() {
    return le(this).overflow;
  }
  function A_() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }
  X("N", 0, 0, "eraAbbr");
  X("NN", 0, 0, "eraAbbr");
  X("NNN", 0, 0, "eraAbbr");
  X("NNNN", 0, 0, "eraName");
  X("NNNNN", 0, 0, "eraNarrow");
  X("y", ["y", 1], "yo", "eraYear");
  X("y", ["yy", 2], 0, "eraYear");
  X("y", ["yyy", 3], 0, "eraYear");
  X("y", ["yyyy", 4], 0, "eraYear");
  W("N", Iu);
  W("NN", Iu);
  W("NNN", Iu);
  W("NNNN", V_);
  W("NNNNN", $_);
  Ee(
    ["N", "NN", "NNN", "NNNN", "NNNNN"],
    function(e, t, n, r) {
      var s = n._locale.erasParse(e, r, n._strict);
      s ? le(n).era = s : le(n).invalidEra = e;
    }
  );
  W("y", Pr);
  W("yy", Pr);
  W("yyy", Pr);
  W("yyyy", Pr);
  W("yo", R_);
  Ee(["y", "yy", "yyy", "yyyy"], Xe);
  Ee(["yo"], function(e, t, n, r) {
    var s;
    n._locale._eraYearOrdinalRegex && (s = e.match(n._locale._eraYearOrdinalRegex)), n._locale.eraYearOrdinalParse ? t[Xe] = n._locale.eraYearOrdinalParse(e, s) : t[Xe] = parseInt(e, 10);
  });
  function F_(e, t) {
    var n, r, s, i = this._eras || hn("en")._eras;
    for (n = 0, r = i.length; n < r; ++n) {
      switch (typeof i[n].since) {
        case "string":
          s = R(i[n].since).startOf("day"), i[n].since = s.valueOf();
          break;
      }
      switch (typeof i[n].until) {
        case "undefined":
          i[n].until = 1 / 0;
          break;
        case "string":
          s = R(i[n].until).startOf("day").valueOf(), i[n].until = s.valueOf();
          break;
      }
    }
    return i;
  }
  function k_(e, t, n) {
    var r, s, i = this.eras(), o, u, l;
    for (e = e.toUpperCase(), r = 0, s = i.length; r < s; ++r)
      if (o = i[r].name.toUpperCase(), u = i[r].abbr.toUpperCase(), l = i[r].narrow.toUpperCase(), n)
        switch (t) {
          case "N":
          case "NN":
          case "NNN":
            if (u === e)
              return i[r];
            break;
          case "NNNN":
            if (o === e)
              return i[r];
            break;
          case "NNNNN":
            if (l === e)
              return i[r];
            break;
        }
      else if ([o, u, l].indexOf(e) >= 0)
        return i[r];
  }
  function N_(e, t) {
    var n = e.since <= e.until ? 1 : -1;
    return t === void 0 ? R(e.since).year() : R(e.since).year() + (t - e.offset) * n;
  }
  function O_() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].name;
    return "";
  }
  function S_() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].narrow;
    return "";
  }
  function T_() {
    var e, t, n, r = this.localeData().eras();
    for (e = 0, t = r.length; e < t; ++e)
      if (n = this.clone().startOf("day").valueOf(), r[e].since <= n && n <= r[e].until || r[e].until <= n && n <= r[e].since)
        return r[e].abbr;
    return "";
  }
  function M_() {
    var e, t, n, r, s = this.localeData().eras();
    for (e = 0, t = s.length; e < t; ++e)
      if (n = s[e].since <= s[e].until ? 1 : -1, r = this.clone().startOf("day").valueOf(), s[e].since <= r && r <= s[e].until || s[e].until <= r && r <= s[e].since)
        return (this.year() - R(s[e].since).year()) * n + s[e].offset;
    return this.year();
  }
  function B_(e) {
    return _e(this, "_erasNameRegex") || Pu.call(this), e ? this._erasNameRegex : this._erasRegex;
  }
  function I_(e) {
    return _e(this, "_erasAbbrRegex") || Pu.call(this), e ? this._erasAbbrRegex : this._erasRegex;
  }
  function P_(e) {
    return _e(this, "_erasNarrowRegex") || Pu.call(this), e ? this._erasNarrowRegex : this._erasRegex;
  }
  function Iu(e, t) {
    return t.erasAbbrRegex(e);
  }
  function V_(e, t) {
    return t.erasNameRegex(e);
  }
  function $_(e, t) {
    return t.erasNarrowRegex(e);
  }
  function R_(e, t) {
    return t._eraYearOrdinalRegex || Pr;
  }
  function Pu() {
    var e = [], t = [], n = [], r = [], s, i, o = this.eras();
    for (s = 0, i = o.length; s < i; ++s)
      t.push(gt(o[s].name)), e.push(gt(o[s].abbr)), n.push(gt(o[s].narrow)), r.push(gt(o[s].name)), r.push(gt(o[s].abbr)), r.push(gt(o[s].narrow));
    this._erasRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._erasNameRegex = new RegExp("^(" + t.join("|") + ")", "i"), this._erasAbbrRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._erasNarrowRegex = new RegExp(
      "^(" + n.join("|") + ")",
      "i"
    );
  }
  X(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100;
  });
  X(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100;
  });
  function Li(e, t) {
    X(0, [e, e.length], 0, t);
  }
  Li("gggg", "weekYear");
  Li("ggggg", "weekYear");
  Li("GGGG", "isoWeekYear");
  Li("GGGGG", "isoWeekYear");
  et("weekYear", "gg");
  et("isoWeekYear", "GG");
  tt("weekYear", 1);
  tt("isoWeekYear", 1);
  W("G", Ii);
  W("g", Ii);
  W("GG", Fe, yt);
  W("gg", Fe, yt);
  W("GGGG", xu, Cu);
  W("gggg", xu, Cu);
  W("GGGGG", Bi, Ti);
  W("ggggg", Bi, Ti);
  ws(
    ["gggg", "ggggg", "GGGG", "GGGGG"],
    function(e, t, n, r) {
      t[r.substr(0, 2)] = ce(e);
    }
  );
  ws(["gg", "GG"], function(e, t, n, r) {
    t[r] = R.parseTwoDigitYear(e);
  });
  function L_(e) {
    return fd.call(
      this,
      e,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function j_(e) {
    return fd.call(
      this,
      e,
      this.isoWeek(),
      this.isoWeekday(),
      1,
      4
    );
  }
  function Y_() {
    return an(this.year(), 1, 4);
  }
  function H_() {
    return an(this.isoWeekYear(), 1, 4);
  }
  function W_() {
    var e = this.localeData()._week;
    return an(this.year(), e.dow, e.doy);
  }
  function U_() {
    var e = this.localeData()._week;
    return an(this.weekYear(), e.dow, e.doy);
  }
  function fd(e, t, n, r, s) {
    var i;
    return e == null ? ds(this, r, s).year : (i = an(e, r, s), t > i && (t = i), z_.call(this, e, t, n, r, s));
  }
  function z_(e, t, n, r, s) {
    var i = Uc(e, t, n, r, s), o = cs(i.year, 0, i.dayOfYear);
    return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this;
  }
  X("Q", 0, "Qo", "quarter");
  et("quarter", "Q");
  tt("quarter", 7);
  W("Q", Ic);
  Ee("Q", function(e, t) {
    t[sn] = (ce(e) - 1) * 3;
  });
  function q_(e) {
    return e == null ? Math.ceil((this.month() + 1) / 3) : this.month((e - 1) * 3 + this.month() % 3);
  }
  X("D", ["DD", 2], "Do", "date");
  et("date", "D");
  tt("date", 9);
  W("D", Fe);
  W("DD", Fe, yt);
  W("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  });
  Ee(["D", "DD"], Ht);
  Ee("Do", function(e, t) {
    t[Ht] = ce(e.match(Fe)[0]);
  });
  var hd = Ir("Date", !0);
  X("DDD", ["DDDD", 3], "DDDo", "dayOfYear");
  et("dayOfYear", "DDD");
  tt("dayOfYear", 4);
  W("DDD", Mi);
  W("DDDD", Pc);
  Ee(["DDD", "DDDD"], function(e, t, n) {
    n._dayOfYear = ce(e);
  });
  function K_(e) {
    var t = Math.round(
      (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
    ) + 1;
    return e == null ? t : this.add(e - t, "d");
  }
  X("m", ["mm", 2], 0, "minute");
  et("minute", "m");
  tt("minute", 14);
  W("m", Fe);
  W("mm", Fe, yt);
  Ee(["m", "mm"], Mt);
  var G_ = Ir("Minutes", !1);
  X("s", ["ss", 2], 0, "second");
  et("second", "s");
  tt("second", 15);
  W("s", Fe);
  W("ss", Fe, yt);
  Ee(["s", "ss"], on);
  var J_ = Ir("Seconds", !1);
  X("S", 0, 0, function() {
    return ~~(this.millisecond() / 100);
  });
  X(0, ["SS", 2], 0, function() {
    return ~~(this.millisecond() / 10);
  });
  X(0, ["SSS", 3], 0, "millisecond");
  X(0, ["SSSS", 4], 0, function() {
    return this.millisecond() * 10;
  });
  X(0, ["SSSSS", 5], 0, function() {
    return this.millisecond() * 100;
  });
  X(0, ["SSSSSS", 6], 0, function() {
    return this.millisecond() * 1e3;
  });
  X(0, ["SSSSSSS", 7], 0, function() {
    return this.millisecond() * 1e4;
  });
  X(0, ["SSSSSSSS", 8], 0, function() {
    return this.millisecond() * 1e5;
  });
  X(0, ["SSSSSSSSS", 9], 0, function() {
    return this.millisecond() * 1e6;
  });
  et("millisecond", "ms");
  tt("millisecond", 16);
  W("S", Mi, Ic);
  W("SS", Mi, yt);
  W("SSS", Mi, Pc);
  var An, pd;
  for (An = "SSSS"; An.length <= 9; An += "S")
    W(An, Pr);
  function Z_(e, t) {
    t[qn] = ce(("0." + e) * 1e3);
  }
  for (An = "S"; An.length <= 9; An += "S")
    Ee(An, Z_);
  pd = Ir("Milliseconds", !1);
  X("z", 0, 0, "zoneAbbr");
  X("zz", 0, 0, "zoneName");
  function Q_() {
    return this._isUTC ? "UTC" : "";
  }
  function X_() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  var N = vs.prototype;
  N.add = Ug;
  N.calendar = Qg;
  N.clone = Xg;
  N.diff = o_;
  N.endOf = g_;
  N.format = c_;
  N.from = d_;
  N.fromNow = f_;
  N.to = h_;
  N.toNow = p_;
  N.get = tm;
  N.invalidAt = x_;
  N.isAfter = e_;
  N.isBefore = t_;
  N.isBetween = n_;
  N.isSame = r_;
  N.isSameOrAfter = s_;
  N.isSameOrBefore = i_;
  N.isValid = w_;
  N.lang = ud;
  N.locale = od;
  N.localeData = ad;
  N.max = wg;
  N.min = Eg;
  N.parsingFlags = C_;
  N.set = nm;
  N.startOf = m_;
  N.subtract = zg;
  N.toArray = b_;
  N.toObject = v_;
  N.toDate = D_;
  N.toISOString = a_;
  N.inspect = l_;
  typeof Symbol < "u" && Symbol.for != null && (N[Symbol.for("nodejs.util.inspect.custom")] = function() {
    return "Moment<" + this.format() + ">";
  });
  N.toJSON = E_;
  N.toString = u_;
  N.unix = y_;
  N.valueOf = __;
  N.creationData = A_;
  N.eraName = O_;
  N.eraNarrow = S_;
  N.eraAbbr = T_;
  N.eraYear = M_;
  N.year = Wc;
  N.isLeapYear = vm;
  N.weekYear = L_;
  N.isoWeekYear = j_;
  N.quarter = N.quarters = q_;
  N.month = Yc;
  N.daysInMonth = ym;
  N.week = N.weeks = Fm;
  N.isoWeek = N.isoWeeks = km;
  N.weeksInYear = W_;
  N.weeksInWeekYear = U_;
  N.isoWeeksInYear = Y_;
  N.isoWeeksInISOWeekYear = H_;
  N.date = hd;
  N.day = N.days = jm;
  N.weekday = Ym;
  N.isoWeekday = Hm;
  N.dayOfYear = K_;
  N.hour = N.hours = Jm;
  N.minute = N.minutes = G_;
  N.second = N.seconds = J_;
  N.millisecond = N.milliseconds = pd;
  N.utcOffset = Tg;
  N.utc = Bg;
  N.local = Ig;
  N.parseZone = Pg;
  N.hasAlignedHourOffset = Vg;
  N.isDST = $g;
  N.isLocal = Lg;
  N.isUtcOffset = jg;
  N.isUtc = nd;
  N.isUTC = nd;
  N.zoneAbbr = Q_;
  N.zoneName = X_;
  N.dates = At(
    "dates accessor is deprecated. Use date instead.",
    hd
  );
  N.months = At(
    "months accessor is deprecated. Use month instead",
    Yc
  );
  N.years = At(
    "years accessor is deprecated. Use year instead",
    Wc
  );
  N.zone = At(
    "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
    Mg
  );
  N.isDSTShifted = At(
    "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
    Rg
  );
  function e1(e) {
    return Ae(e * 1e3);
  }
  function t1() {
    return Ae.apply(null, arguments).parseZone();
  }
  function md(e) {
    return e;
  }
  var ye = vu.prototype;
  ye.calendar = j0;
  ye.longDateFormat = U0;
  ye.invalidDate = q0;
  ye.ordinal = J0;
  ye.preparse = md;
  ye.postformat = md;
  ye.relativeTime = Q0;
  ye.pastFuture = X0;
  ye.set = R0;
  ye.eras = F_;
  ye.erasParse = k_;
  ye.erasConvertYear = N_;
  ye.erasAbbrRegex = I_;
  ye.erasNameRegex = B_;
  ye.erasNarrowRegex = P_;
  ye.months = pm;
  ye.monthsShort = mm;
  ye.monthsParse = _m;
  ye.monthsRegex = bm;
  ye.monthsShortRegex = Dm;
  ye.week = wm;
  ye.firstDayOfYear = Am;
  ye.firstDayOfWeek = xm;
  ye.weekdays = Pm;
  ye.weekdaysMin = $m;
  ye.weekdaysShort = Vm;
  ye.weekdaysParse = Lm;
  ye.weekdaysRegex = Wm;
  ye.weekdaysShortRegex = Um;
  ye.weekdaysMinRegex = zm;
  ye.isPM = Km;
  ye.meridiem = Zm;
  function pi(e, t, n, r) {
    var s = hn(), i = Kt().set(r, t);
    return s[n](i, e);
  }
  function gd(e, t, n) {
    if (dn(e) && (t = e, e = void 0), e = e || "", t != null)
      return pi(e, t, n, "month");
    var r, s = [];
    for (r = 0; r < 12; r++)
      s[r] = pi(e, r, n, "month");
    return s;
  }
  function Vu(e, t, n, r) {
    typeof e == "boolean" ? (dn(t) && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, dn(t) && (n = t, t = void 0), t = t || "");
    var s = hn(), i = e ? s._week.dow : 0, o, u = [];
    if (n != null)
      return pi(t, (n + i) % 7, r, "day");
    for (o = 0; o < 7; o++)
      u[o] = pi(t, (o + i) % 7, r, "day");
    return u;
  }
  function n1(e, t) {
    return gd(e, t, "months");
  }
  function r1(e, t) {
    return gd(e, t, "monthsShort");
  }
  function s1(e, t, n) {
    return Vu(e, t, n, "weekdays");
  }
  function i1(e, t, n) {
    return Vu(e, t, n, "weekdaysShort");
  }
  function o1(e, t, n) {
    return Vu(e, t, n, "weekdaysMin");
  }
  kn("en", {
    eras: [
      {
        since: "0001-01-01",
        until: 1 / 0,
        offset: 1,
        name: "Anno Domini",
        narrow: "AD",
        abbr: "AD"
      },
      {
        since: "0000-12-31",
        until: -1 / 0,
        offset: 1,
        name: "Before Christ",
        narrow: "BC",
        abbr: "BC"
      }
    ],
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10, n = ce(e % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
      return e + n;
    }
  });
  R.lang = At(
    "moment.lang is deprecated. Use moment.locale instead.",
    kn
  );
  R.langData = At(
    "moment.langData is deprecated. Use moment.localeData instead.",
    hn
  );
  var Xt = Math.abs;
  function u1() {
    var e = this._data;
    return this._milliseconds = Xt(this._milliseconds), this._days = Xt(this._days), this._months = Xt(this._months), e.milliseconds = Xt(e.milliseconds), e.seconds = Xt(e.seconds), e.minutes = Xt(e.minutes), e.hours = Xt(e.hours), e.months = Xt(e.months), e.years = Xt(e.years), this;
  }
  function _d(e, t, n, r) {
    var s = $t(t, n);
    return e._milliseconds += r * s._milliseconds, e._days += r * s._days, e._months += r * s._months, e._bubble();
  }
  function a1(e, t) {
    return _d(this, e, t, 1);
  }
  function l1(e, t) {
    return _d(this, e, t, -1);
  }
  function Ha(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }
  function c1() {
    var e = this._milliseconds, t = this._days, n = this._months, r = this._data, s, i, o, u, l;
    return e >= 0 && t >= 0 && n >= 0 || e <= 0 && t <= 0 && n <= 0 || (e += Ha(Ho(n) + t) * 864e5, t = 0, n = 0), r.milliseconds = e % 1e3, s = wt(e / 1e3), r.seconds = s % 60, i = wt(s / 60), r.minutes = i % 60, o = wt(i / 60), r.hours = o % 24, t += wt(o / 24), l = wt(yd(t)), n += l, t -= Ha(Ho(l)), u = wt(n / 12), n %= 12, r.days = t, r.months = n, r.years = u, this;
  }
  function yd(e) {
    return e * 4800 / 146097;
  }
  function Ho(e) {
    return e * 146097 / 4800;
  }
  function d1(e) {
    if (!this.isValid())
      return NaN;
    var t, n, r = this._milliseconds;
    if (e = Ft(e), e === "month" || e === "quarter" || e === "year")
      switch (t = this._days + r / 864e5, n = this._months + yd(t), e) {
        case "month":
          return n;
        case "quarter":
          return n / 3;
        case "year":
          return n / 12;
      }
    else
      switch (t = this._days + Math.round(Ho(this._months)), e) {
        case "week":
          return t / 7 + r / 6048e5;
        case "day":
          return t + r / 864e5;
        case "hour":
          return t * 24 + r / 36e5;
        case "minute":
          return t * 1440 + r / 6e4;
        case "second":
          return t * 86400 + r / 1e3;
        case "millisecond":
          return Math.floor(t * 864e5) + r;
        default:
          throw new Error("Unknown unit " + e);
      }
  }
  function f1() {
    return this.isValid() ? this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + ce(this._months / 12) * 31536e6 : NaN;
  }
  function pn(e) {
    return function() {
      return this.as(e);
    };
  }
  var h1 = pn("ms"), p1 = pn("s"), m1 = pn("m"), g1 = pn("h"), _1 = pn("d"), y1 = pn("w"), D1 = pn("M"), b1 = pn("Q"), v1 = pn("y");
  function E1() {
    return $t(this);
  }
  function w1(e) {
    return e = Ft(e), this.isValid() ? this[e + "s"]() : NaN;
  }
  function lr(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN;
    };
  }
  var C1 = lr("milliseconds"), x1 = lr("seconds"), A1 = lr("minutes"), F1 = lr("hours"), k1 = lr("days"), N1 = lr("months"), O1 = lr("years");
  function S1() {
    return wt(this.days() / 7);
  }
  var nn = Math.round, wr = {
    ss: 44,
    // a few seconds to seconds
    s: 45,
    // seconds to minute
    m: 45,
    // minutes to hour
    h: 22,
    // hours to day
    d: 26,
    // days to month/week
    w: null,
    // weeks to month
    M: 11
    // months to year
  };
  function T1(e, t, n, r, s) {
    return s.relativeTime(t || 1, !!n, e, r);
  }
  function M1(e, t, n, r) {
    var s = $t(e).abs(), i = nn(s.as("s")), o = nn(s.as("m")), u = nn(s.as("h")), l = nn(s.as("d")), d = nn(s.as("M")), a = nn(s.as("w")), c = nn(s.as("y")), f = i <= n.ss && ["s", i] || i < n.s && ["ss", i] || o <= 1 && ["m"] || o < n.m && ["mm", o] || u <= 1 && ["h"] || u < n.h && ["hh", u] || l <= 1 && ["d"] || l < n.d && ["dd", l];
    return n.w != null && (f = f || a <= 1 && ["w"] || a < n.w && ["ww", a]), f = f || d <= 1 && ["M"] || d < n.M && ["MM", d] || c <= 1 && ["y"] || ["yy", c], f[2] = t, f[3] = +e > 0, f[4] = r, T1.apply(null, f);
  }
  function B1(e) {
    return e === void 0 ? nn : typeof e == "function" ? (nn = e, !0) : !1;
  }
  function I1(e, t) {
    return wr[e] === void 0 ? !1 : t === void 0 ? wr[e] : (wr[e] = t, e === "s" && (wr.ss = t - 1), !0);
  }
  function P1(e, t) {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var n = !1, r = wr, s, i;
    return typeof e == "object" && (t = e, e = !1), typeof e == "boolean" && (n = e), typeof t == "object" && (r = Object.assign({}, wr, t), t.s != null && t.ss == null && (r.ss = t.s - 1)), s = this.localeData(), i = M1(this, !n, r, s), n && (i = s.pastFuture(+this, i)), s.postformat(i);
  }
  var uo = Math.abs;
  function mr(e) {
    return (e > 0) - (e < 0) || +e;
  }
  function ji() {
    if (!this.isValid())
      return this.localeData().invalidDate();
    var e = uo(this._milliseconds) / 1e3, t = uo(this._days), n = uo(this._months), r, s, i, o, u = this.asSeconds(), l, d, a, c;
    return u ? (r = wt(e / 60), s = wt(r / 60), e %= 60, r %= 60, i = wt(n / 12), n %= 12, o = e ? e.toFixed(3).replace(/\.?0+$/, "") : "", l = u < 0 ? "-" : "", d = mr(this._months) !== mr(u) ? "-" : "", a = mr(this._days) !== mr(u) ? "-" : "", c = mr(this._milliseconds) !== mr(u) ? "-" : "", l + "P" + (i ? d + i + "Y" : "") + (n ? d + n + "M" : "") + (t ? a + t + "D" : "") + (s || r || e ? "T" : "") + (s ? c + s + "H" : "") + (r ? c + r + "M" : "") + (e ? c + o + "S" : "")) : "P0D";
  }
  var me = Ri.prototype;
  me.isValid = kg;
  me.abs = u1;
  me.add = a1;
  me.subtract = l1;
  me.as = d1;
  me.asMilliseconds = h1;
  me.asSeconds = p1;
  me.asMinutes = m1;
  me.asHours = g1;
  me.asDays = _1;
  me.asWeeks = y1;
  me.asMonths = D1;
  me.asQuarters = b1;
  me.asYears = v1;
  me.valueOf = f1;
  me._bubble = c1;
  me.clone = E1;
  me.get = w1;
  me.milliseconds = C1;
  me.seconds = x1;
  me.minutes = A1;
  me.hours = F1;
  me.days = k1;
  me.weeks = S1;
  me.months = N1;
  me.years = O1;
  me.humanize = P1;
  me.toISOString = ji;
  me.toString = ji;
  me.toJSON = ji;
  me.locale = od;
  me.localeData = ad;
  me.toIsoString = At(
    "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
    ji
  );
  me.lang = ud;
  X("X", 0, 0, "unix");
  X("x", 0, 0, "valueOf");
  W("x", Ii);
  W("X", sm);
  Ee("X", function(e, t, n) {
    n._d = new Date(parseFloat(e) * 1e3);
  });
  Ee("x", function(e, t, n) {
    n._d = new Date(ce(e));
  });
  //! moment.js
  R.version = "2.29.4";
  V0(Ae);
  R.fn = N;
  R.min = Cg;
  R.max = xg;
  R.now = Ag;
  R.utc = Kt;
  R.unix = e1;
  R.months = n1;
  R.isDate = bs;
  R.locale = kn;
  R.invalid = Oi;
  R.duration = $t;
  R.isMoment = Pt;
  R.weekdays = s1;
  R.parseZone = t1;
  R.localeData = hn;
  R.isDuration = qs;
  R.monthsShort = r1;
  R.weekdaysMin = o1;
  R.defineLocale = Nu;
  R.updateLocale = tg;
  R.locales = ng;
  R.weekdaysShort = i1;
  R.normalizeUnits = Ft;
  R.relativeTimeRounding = B1;
  R.relativeTimeThreshold = I1;
  R.calendarFormat = Zg;
  R.prototype = N;
  R.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    // <input type="datetime-local" />
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    // <input type="datetime-local" step="1" />
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    // <input type="datetime-local" step="0.001" />
    DATE: "YYYY-MM-DD",
    // <input type="date" />
    TIME: "HH:mm",
    // <input type="time" />
    TIME_SECONDS: "HH:mm:ss",
    // <input type="time" step="1" />
    TIME_MS: "HH:mm:ss.SSS",
    // <input type="time" step="0.001" />
    WEEK: "GGGG-[W]WW",
    // <input type="week" />
    MONTH: "YYYY-MM"
    // <input type="month" />
  };
  R.updateLocale("en", {
    week: {
      dow: 1
      // 0 to 6 sunday to saturday
    }
  });
  const Yi = {
    config: {
      values: {
        wgScriptPath: "",
        wgArticlePath: "",
        wgMonthNames: [
          "",
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        WikiSearchFront: {
          config: {
            settings: {
              action: {
                name: "teststst",
                label: "do action",
                type: "page"
              },
              size: 10,
              "size options": ["10", " 20", " 50"],
              "sort options": {
                Title: { label: "sort title" }
              },
              info: !0,
              title: {
                name: "Title",
                key: 633,
                type: "mlt_recField",
                highlight: !0
              },
              // selected: 'Favo:Admin;Tag:ICT',
              searchOnInput: !0,
              layout: "table"
              // template: 'parse test'
              // layout: 'calendar',
              // calendar: {
              //   name: 'Modification date',
              //   key: 29,
              //   type: 'dateField',
              //   weekend: 'false',
              //   display: 'year',
              //   template: 'test',
              //   slot: 'prop-slot',               
              //   prefix: 'event:',
              //   color: {
              //     name: 'Title',
              //     key: 631,
              //     type: 'txtField',
              //   }
              // },
              // theme: 'dark',
            },
            facetSettings: {
              title: {
                display: "search"
              },
              Namespacenr: {
                display: "ask combobox",
                query: "[[Class::+]]",
                data: "Namespacenr",
                text: "Title",
                search: "true"
              },
              Favo: {
                label: "my favos",
                value: "admin",
                valueLabel: "my favos"
              },
              Version: {
                display: "elastic combobox",
                count: "false"
              },
              "Modification date": {
                display: "date",
                label: "Updated",
                type: "date",
                max: "20"
              },
              // Tag: [],
              Tag: {
                display: "switch",
                true: "ICT",
                false: "Test",
                default: "false"
              }
            },
            hitSettings: {
              // '-Modification date': {},
              // '-page': {
              //   label: ' ',
              //   display: 'checkbox',
              // },
              // Date: {
              //   key: 718,
              //   type: 'datField',
              // },
              // '-snippet': {},
              // Title: {
              //   key: 633,
              //   type: 'mlt_recField',
              //   display: 'pill',
              //   label: 'pills tags',
              // },
              Class: {
                key: 631,
                type: "txtField",
                display: "template",
                template: "test"
              },
              Version: {
                key: 635,
                type: "wpgField",
                display: "checkbox",
                label: " "
              }
              // '$title': {
              //   display: 'link',
              // },
            }
          }
        }
      }
    }
  };
  class V1 {
    postWithToken() {
      const t = new Promise((n) => setTimeout(() => {
        n({});
      }, 1e3));
      return t.done = t.then, t;
    }
    post() {
      const t = new Promise((n) => setTimeout(() => {
        n({
          parse: {
            text: {
              "*": "template <b>output</b>"
            }
          },
          pages: {
            602: {
              title: "Template:Layout Card",
              params: {
                Image: {
                  type: "wiki-file-name",
                  label: null,
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                },
                Headline: {
                  type: "string",
                  label: null,
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                },
                Content: {
                  type: "content",
                  label: null,
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                },
                "Headline link": {
                  type: "url",
                  label: {
                    en: "Headline link (fully qualified URL)"
                  },
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                },
                "Button text": {
                  type: "string",
                  label: null,
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                },
                "Button link": {
                  type: "url",
                  label: {
                    en: "Button link (fully qualified URL)"
                  },
                  required: !1,
                  suggested: !1,
                  description: null,
                  example: null,
                  deprecated: !1,
                  aliases: [],
                  autovalue: null,
                  default: null
                }
              },
              description: {
                en: "A Layout Card is a way to call attention to content. Place a Layout Card only inside a Layout Cell."
              },
              format: null,
              sets: [],
              maps: {}
            }
          },
          query: {
            printrequests: [
              {
                label: "",
                key: "",
                redi: "",
                typeid: "_wpg",
                mode: 2,
                format: !1
              },
              {
                label: "Namespacenr",
                key: "Namespacenr",
                redi: "",
                typeid: "_wpg",
                mode: 1,
                format: ""
              },
              {
                label: "Title",
                key: "Title",
                redi: "",
                typeid: "_txt",
                mode: 1,
                format: ""
              }
            ],
            results: {
              "APEN:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50044",
                      fullurl: "//pids35.wikibase.nl/50044",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Apen hub en apen hebben hele lange armen dus deze hub heeft een lange naam"
                  ]
                },
                fulltext: "APEN:Home",
                fullurl: "//pids35.wikibase.nl/APEN:Home",
                namespace: 50044,
                exists: "1",
                displaytitle: "Apen hub en apen hebben hele lange armen dus deze hub heeft een lange naam"
              },
              "PARKIET:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50074",
                      fullurl: "//pids35.wikibase.nl/50074",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Parkiet"
                  ]
                },
                fulltext: "PARKIET:Home",
                fullurl: "//pids35.wikibase.nl/PARKIET:Home",
                namespace: 50074,
                exists: "1",
                displaytitle: "Parkiet"
              },
              "EEEE:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50020",
                      fullurl: "//pids35.wikibase.nl/50020",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Testing image"
                  ]
                },
                fulltext: "EEEE:Home",
                fullurl: "//pids35.wikibase.nl/EEEE:Home",
                namespace: 50020,
                exists: "1",
                displaytitle: "Testing image"
              },
              "WITNEUSH:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50050",
                      fullurl: "//pids35.wikibase.nl/50050",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Witte neushoorn"
                  ]
                },
                fulltext: "WITNEUSH:Home",
                fullurl: "//pids35.wikibase.nl/WITNEUSH:Home",
                namespace: 50050,
                exists: "1",
                displaytitle: "Witte neushoorn"
              },
              "OTTER:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50012",
                      fullurl: "//pids35.wikibase.nl/50012",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "De Otter Hub"
                  ]
                },
                fulltext: "OTTER:Home",
                fullurl: "//pids35.wikibase.nl/OTTER:Home",
                namespace: 50012,
                exists: "1",
                displaytitle: "De Otter Hub"
              },
              "RATTEN:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50040",
                      fullurl: "//pids35.wikibase.nl/50040",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Ratten hub"
                  ]
                },
                fulltext: "RATTEN:Home",
                fullurl: "//pids35.wikibase.nl/RATTEN:Home",
                namespace: 50040,
                exists: "1",
                displaytitle: "Ratten hub"
              },
              "KATTEN:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50038",
                      fullurl: "//pids35.wikibase.nl/50038",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Katten hub"
                  ]
                },
                fulltext: "KATTEN:Home",
                fullurl: "//pids35.wikibase.nl/KATTEN:Home",
                namespace: 50038,
                exists: "1",
                displaytitle: "Katten hub"
              },
              "SPECHT:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50080",
                      fullurl: "//pids35.wikibase.nl/50080",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Specht Hub"
                  ]
                },
                fulltext: "SPECHT:Home",
                fullurl: "//pids35.wikibase.nl/SPECHT:Home",
                namespace: 50080,
                exists: "1",
                displaytitle: "Specht Hub"
              },
              "STEENBOK:Home": {
                printouts: {
                  Namespacenr: [
                    {
                      fulltext: "50036",
                      fullurl: "//pids35.wikibase.nl/50036",
                      namespace: 0,
                      exists: "",
                      displaytitle: ""
                    }
                  ],
                  Title: [
                    "Steenbok"
                  ]
                },
                fulltext: "STEENBOK:Home",
                fullurl: "//pids35.wikibase.nl/STEENBOK:Home",
                namespace: 50036,
                exists: "1",
                displaytitle: "Steenbok"
              }
            },
            serializer: "SMW\\Serializers\\QueryResultSerializer",
            version: 2,
            meta: {
              hash: "8bfd38801fd01e6d6fc1698fe0d068f0",
              count: 9,
              offset: 0,
              source: "",
              time: "0.012250"
            }
          },
          resultz: [
            {
              key: "Themapagina",
              doc_count: 2523
            },
            {
              key: "Gremiumpagina",
              doc_count: 110
            },
            {
              key: "Vrije tekst gremiumpagina",
              doc_count: 16
            },
            {
              key: "Verwijderde pagina",
              doc_count: 9
            },
            {
              key: "Themapagina tab",
              doc_count: 6
            },
            {
              key: "Bestand bij gremiumpagina",
              doc_count: 1
            },
            {
              key: "Redactiegroep pagina",
              doc_count: 1
            }
          ],
          result: {
            hits: `[{"_index":"smw-data-wiki-v1","_type":"data","_id":"1092","_score":10,"_source":{"subject":{"title":"Are You Embarrassed By Your ICT Skills? Here's What To Do","subobject":"","namespace":0,"interwiki":"","sortkey":"Are You Embarrassed By Your ICT Skills? Here's What To Do","serialization":"Are_You_Embarrassed_By_Your_ICT_Skills?_Here's_What_To_Do#0##","sha1":"37352bfc343302b09af6960e14a67d6e6ac733e0","rev_id":1106,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Are You Embarrassed By Your ICT Skills? Here's What To Do# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1407]},"P:29":{"datField":[2459320.9450926],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/56\\/0"]},"P:749":{"numField":[49]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1152","_score":10,"_source":{"subject":{"title":"5 Problems Everyone Has With ICT \\u2013 How To Solved Them","subobject":"","namespace":0,"interwiki":"","sortkey":"5 Problems Everyone Has With ICT \\u2013 How To Solved Them","serialization":"5_Problems_Everyone_Has_With_ICT_\\u2013_How_To_Solved_Them#0##","sha1":"d5c7240c04f90135baf5359a49fdb138e758901c","rev_id":1167,"namespacename":""},"P:631":{"txtField":["Page"]},"P:734":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1", "2"],"wpgID":[640]},"P:702":{"wpgField":["5 Problems Everyone Has With ICT \\u2013 How To Solved Them# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1404]},"P:29":{"datField":[2459320.945162],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/41\\/2\\/0"]},"P:749":{"numField":[109]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"710","_score":10,"_source":{"subject":{"title":"Homedata","subobject":"","namespace":0,"interwiki":"","sortkey":"Homedata","serialization":"Homedata#0##","sha1":"5c4c0528776db35953c942aa714385831b0652e7","rev_id":747,"namespacename":""},"P:631":{"txtField":["homedata"]},"P:711":{"wpgField":["Robis"],"wpgID":[712]},"P:702":{"wpgField":["Homedata# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1408]},"P:29":{"datField":[2459320.0308912],"dat_raw":["1\\/2021\\/4\\/15\\/12\\/44\\/29\\/0"]},"P:718":{"datField":[2456010.5],"dat_raw":["1\\/2012\\/3\\/24"]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1352","_score":10,"_source":{"subject":{"title":"Food","subobject":"","namespace":0,"interwiki":"","sortkey":"Food","serialization":"Food#0##","sha1":"47cb6da1d7ef7c27f0e3a8df63e95200ecfc3bb1","rev_id":1431,"namespacename":""},"P:631":{"txtField":["Service"]},"P:1343":{"wpgField":["Http:\\/\\/localhost\\/wiki1.35\\/images\\/3\\/39\\/File 1.jpg"],"wpgID":[1344]},"P:633":{"wpgField":["Food#Eten en drinken;nl","Food#Food & drinks;en","Food#Esta e cola;es"],"wpgID":[1391,1392,1393]},"P:29":{"datField":[2459393.9369097],"dat_raw":["1\\/2021\\/6\\/28\\/10\\/29\\/9\\/0"]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"862","_score":10,"_source":{"subject":{"title":"Essential TEST Smartphone Apps","subobject":"","namespace":0,"interwiki":"","sortkey":"Essential TEST Smartphone Apps","serialization":"Essential_TEST_Smartphone_Apps#0##","sha1":"5a9710e615fb736cc0d073e629ecb3fd9358ac78","rev_id":879,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Essential TEST Smartphone Apps# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1434]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[119]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"871","_score":10,"_source":{"subject":{"title":"TEST Is Essential For Your Success. Read This To Find Out Why","subobject":"","namespace":0,"interwiki":"","sortkey":"TEST Is Essential For Your Success. Read This To Find Out Why","serialization":"TEST_Is_Essential_For_Your_Success._Read_This_To_Find_Out_Why#0##","sha1":"a642515d75971dad83cea7a46864f4c78d317d1e","rev_id":888,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["TEST Is Essential For Your Success. Read This To Find Out Why# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1609]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[128]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1061","_score":10,"_source":{"subject":{"title":"I Don't Want To Spend This Much Time On ICT. How About You?","subobject":"","namespace":0,"interwiki":"","sortkey":"I Don't Want To Spend This Much Time On ICT. How About You?","serialization":"I_Don't_Want_To_Spend_This_Much_Time_On_ICT._How_About_You?#0##","sha1":"a6682e9dd3d5f512f0ec4c2a5b36e7193615ea80","rev_id":1076,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["I Don't Want To Spend This Much Time On ICT. How About You?# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1616]},"P:29":{"datField":[2459320.9450579],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/53\\/0"]},"P:749":{"numField":[18]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"1111","_score":10,"_source":{"subject":{"title":"Short Story: The Truth About ICT","subobject":"","namespace":0,"interwiki":"","sortkey":"Short Story: The Truth About ICT","serialization":"Short_Story:_The_Truth_About_ICT#0##","sha1":"619a5e41b5902afb90fbaacafecadbebf14e8fba","rev_id":1126,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["ICT"],"wpgID":[1041]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Short Story: The Truth About ICT# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1618]},"P:29":{"datField":[2459320.9451157],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/40\\/58\\/0"]},"P:749":{"numField":[68]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"932","_score":10,"_source":{"subject":{"title":"Need More Time? Read These Tips To Eliminate TEST","subobject":"","namespace":0,"interwiki":"","sortkey":"Need More Time? Read These Tips To Eliminate TEST","serialization":"Need_More_Time?_Read_These_Tips_To_Eliminate_TEST#0##","sha1":"6a4a1106d9b779c99b15dc8c4c0d36e7fad0edd8","rev_id":950,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Need More Time? Read These Tips To Eliminate TEST# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1622]},"P:29":{"datField":[2459320.9428588],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/43\\/0"]},"P:749":{"numField":[190]}}},{"_index":"smw-data-wiki-v1","_type":"data","_id":"859","_score":10,"_source":{"subject":{"title":"Turn Your TEST Into A High Performing Machine","subobject":"","namespace":0,"interwiki":"","sortkey":"Turn Your TEST Into A High Performing Machine","serialization":"Turn_Your_TEST_Into_A_High_Performing_Machine#0##","sha1":"1566e4d1ac8719357f18046bf89a0b1600026c0c","rev_id":876,"namespacename":""},"P:631":{"txtField":["Page"]},"P:748":{"wpgField":["Test"],"wpgID":[559]},"P:635":{"wpgField":["1"],"wpgID":[640]},"P:702":{"wpgField":["Turn Your TEST Into A High Performing Machine# ERRb78a3223503896721cca1303f776159b"],"wpgID":[1624]},"P:29":{"datField":[2459320.9428125],"dat_raw":["1\\/2021\\/4\\/16\\/10\\/37\\/39\\/0"]},"P:749":{"numField":[116]}}}]`,
            total: 606,
            aggs: {
              "Average rating": {
                meta: [],
                doc_count: 59,
                "Average rating": {
                  buckets: {
                    1: {
                      from: 1,
                      to: 6,
                      doc_count: 28,
                      key: "1"
                    },
                    2: {
                      from: 2,
                      to: 6,
                      doc_count: 27,
                      key: "2"
                    },
                    3: {
                      from: 3,
                      to: 6,
                      doc_count: 27,
                      key: "3"
                    },
                    4: {
                      from: 4,
                      to: 6,
                      doc_count: 25,
                      key: "4"
                    },
                    5: {
                      from: 5,
                      to: 6,
                      doc_count: 13,
                      key: "5"
                    }
                  }
                }
              },
              "Modification date": {
                meta: [],
                doc_count: 606,
                "Modification date": {
                  buckets: {
                    2017: { from: 2457754, to: 2458119, doc_count: 0 },
                    2018: { from: 2458119, to: 2458484, doc_count: 0 },
                    2019: { from: 2458484, to: 2458849, doc_count: 0 },
                    2020: { from: 2458849, to: 2459215, doc_count: 0 },
                    2021: { from: 2459215, to: 2459580, doc_count: 606 },
                    "Last Quarter": {
                      from: 2459301,
                      to: 2459423,
                      doc_count: 605
                    },
                    "Last Month": { from: 2459393, to: 2459423, doc_count: 4 },
                    "Last Week": { from: 2459416, to: 2459423, doc_count: 0 }
                  }
                }
              },
              Version: {
                meta: [],
                doc_count: 606,
                Version: {
                  doc_count_error_upper_bound: 0,
                  sum_other_doc_count: 0,
                  buckets: [
                    { key: "1", doc_count: 591 },
                    { key: "Essential TEST Smartphone Apps", doc_count: 2 },
                    { key: "4", doc_count: 2 },
                    { key: "1.2", doc_count: 1 },
                    { key: "2", doc_count: 1 },
                    { key: "5", doc_count: 1 }
                  ]
                }
              },
              Title: {
                meta: [],
                doc_count: 606,
                Title: {
                  doc_count_error_upper_bound: 0,
                  sum_other_doc_count: 0,
                  buckets: []
                }
              },
              Class: {
                meta: [],
                doc_count: 606,
                Class: {
                  doc_count_error_upper_bound: 0,
                  sum_other_doc_count: 0,
                  buckets: [
                    { key: "Page", doc_count: 599 },
                    { key: "Service", doc_count: 3 },
                    { key: "homedata", doc_count: 2 },
                    { key: "Food", doc_count: 1 },
                    { key: "trans", doc_count: 1 }
                  ]
                }
              },
              Tag: {
                meta: [],
                doc_count: 606,
                Tag: {
                  doc_count_error_upper_bound: 0,
                  sum_other_doc_count: 0,
                  buckets: [
                    { key: "ICT", doc_count: 2 },
                    { key: "Test", doc_count: 1 }
                  ]
                }
              },
              Link: {
                meta: [],
                doc_count: 606,
                Link: {
                  doc_count_error_upper_bound: 0,
                  sum_other_doc_count: 0,
                  buckets: [
                    { key: "Homedata", doc_count: 1 },
                    { key: "Trans", doc_count: 1 }
                  ]
                }
              }
            }
          }
        });
      }, 1e3));
      return t.done = t.then, t;
    }
  }
  class $1 {
    constructor(t) {
      this.msg = t, this.messages = {
        jan: "jan",
        feb: "feb",
        mar: "mar",
        apr: "apr",
        may: "may",
        jun: "jun",
        jul: "jul",
        aug: "aug",
        sep: "sep",
        oct: "oct",
        nov: "nov",
        dec: "dec"
      };
    }
    text() {
      return this.msg in this.messages ? this.messages[this.msg] : "MSGNOTFOUND";
    }
  }
  Yi.message = function(t) {
    return new $1(t);
  };
  Yi.Api = V1;
  const R1 = new Yi.Api(), Wa = Yi.config.values.WikiSearchFront.config, mn = S0("store", {
    state: () => ({
      hits: [],
      total: 0,
      term: "",
      size: Wa.settings.size || 10,
      from: 0,
      selected: [],
      config: Wa,
      aggregations: {}
    }),
    actions: {
      async fetchResult() {
        const e = {
          action: "query",
          meta: "WikiSearch",
          format: "json",
          filter: JSON.stringify(this.selected),
          //term: prepareQuery(this.term),
          from: this.from,
          limit: this.size
          // pageid: mediaWikiValues.wgArticleId,
          // aggregations: JSON.stringify(state.dates),
        }, t = await R1.post(e);
        this.setResult(t);
      },
      select(e) {
        this.selected = e;
      },
      search(e) {
        this.term = e;
      },
      setResult(e) {
        this.hits = JSON.parse(e.result.hits), this.total = e.result.total;
        const t = ([n, r]) => ({
          ...r,
          key: n,
          value: r.key || n,
          label: r.label || r.key || n
        });
        this.aggregations = Object.fromEntries(Object.entries(e.result.aggs).map(([n, r]) => {
          const s = Array.isArray(r[n].buckets) ? r[n].buckets.map((i) => t([n, i])) : Object.entries(r[n].buckets).map(t);
          return [n, s];
        }));
      }
    }
  });
  var L1 = Object.defineProperty, j1 = Object.defineProperties, Y1 = Object.getOwnPropertyDescriptors, mi = Object.getOwnPropertySymbols, Dd = Object.prototype.hasOwnProperty, bd = Object.prototype.propertyIsEnumerable, Ua = (e, t, n) => t in e ? L1(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, H1 = (e, t) => {
    for (var n in t || (t = {}))
      Dd.call(t, n) && Ua(e, n, t[n]);
    if (mi)
      for (var n of mi(t))
        bd.call(t, n) && Ua(e, n, t[n]);
    return e;
  }, W1 = (e, t) => j1(e, Y1(t)), Wo = (e, t) => {
    var n = {};
    for (var r in e)
      Dd.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && mi)
      for (var r of mi(e))
        t.indexOf(r) < 0 && bd.call(e, r) && (n[r] = e[r]);
    return n;
  }, za = (e, t, n) => new Promise((r, s) => {
    var i = (l) => {
      try {
        u(n.next(l));
      } catch (d) {
        s(d);
      }
    }, o = (l) => {
      try {
        u(n.throw(l));
      } catch (d) {
        s(d);
      }
    }, u = (l) => l.done ? r(l.value) : Promise.resolve(l.value).then(i, o);
    u((n = n.apply(e, t)).next());
  });
  function Jt(e) {
    return (t) => typeof t == "string" && e.indexOf(t) !== -1;
  }
  const ao = "cdx", U1 = [
    "default",
    "progressive",
    "destructive"
  ], vd = [
    "normal",
    "primary",
    "quiet"
  ], z1 = [
    "button",
    "submit",
    "reset"
  ], q1 = [
    "x-small",
    "small",
    "medium"
  ], K1 = [
    "notice",
    "warning",
    "error",
    "success"
  ], Ed = Jt(K1), G1 = [
    "text",
    "search",
    "number",
    "email",
    "month",
    "password",
    "tel",
    "url",
    "week",
    "date",
    "datetime-local",
    "time"
  ], Hi = [
    "default",
    "error"
  ], J1 = 120, Z1 = 500, gr = "cdx-menu-footer-item", wd = Symbol("CdxTabs"), Cd = Symbol("CdxActiveTab"), Q1 = '<path d="M11.53 2.3A1.85 1.85 0 0010 1.21 1.85 1.85 0 008.48 2.3L.36 16.36C-.48 17.81.21 19 1.88 19h16.24c1.67 0 2.36-1.19 1.52-2.64zM11 16H9v-2h2zm0-4H9V6h2z"/>', X1 = '<path d="M12.43 14.34A5 5 0 0110 15a5 5 0 113.95-2L17 16.09V3a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 001.45-.63z"/><circle cx="10" cy="10" r="3"/>', ey = '<path d="M10 0a10 10 0 1010 10A10 10 0 0010 0zm5.66 14.24-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"/>', ty = '<path d="m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"/><path d="M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"/>', ny = '<path d="M13.728 1H6.272L1 6.272v7.456L6.272 19h7.456L19 13.728V6.272zM11 15H9v-2h2zm0-4H9V5h2z"/>', ry = '<path d="m17.5 4.75-7.5 7.5-7.5-7.5L1 6.25l9 9 9-9z"/>', sy = '<path d="M19 3H1v14h18zM3 14l3.5-4.5 2.5 3L12.5 8l4.5 6z"/><path d="M19 5H1V3h18zm0 12H1v-2h18z"/>', iy = '<path d="M8 19a1 1 0 001 1h2a1 1 0 001-1v-1H8zm9-12a7 7 0 10-12 4.9S7 14 7 15v1a1 1 0 001 1h4a1 1 0 001-1v-1c0-1 2-3.1 2-3.1A7 7 0 0017 7z"/>', oy = '<path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM9 5h2v2H9zm0 4h2v6H9z"/>', uy = '<path d="M7 1 5.6 2.5 13 10l-7.4 7.5L7 19l9-9z"/>', ay = '<path d="m4 10 9 9 1.4-1.5L7 10l7.4-7.5L13 1z"/>', ly = '<path d="M12.2 13.6a7 7 0 111.4-1.4l5.4 5.4-1.4 1.4zM3 8a5 5 0 1010 0A5 5 0 003 8z"/>', cy = '<path fill-rule="evenodd" d="M10 20a10 10 0 100-20 10 10 0 000 20Zm-2-5 9-8.5L15.5 5 8 12 4.5 8.5 3 10l5 5Z" clip-rule="evenodd"/>', xd = Q1, dy = X1, fy = ey, Ad = ty, Fd = ny, kd = ry, hy = sy, py = {
    langCodeMap: {
      ar: iy
    },
    default: oy
  }, my = {
    ltr: uy,
    shouldFlip: !0
  }, gy = {
    ltr: ay,
    shouldFlip: !0
  }, _y = ly, Nd = cy;
  function yy(e, t, n) {
    if (typeof e == "string" || "path" in e)
      return e;
    if ("shouldFlip" in e)
      return e.ltr;
    if ("rtl" in e)
      return n === "rtl" ? e.rtl : e.ltr;
    const r = t in e.langCodeMap ? e.langCodeMap[t] : e.default;
    return typeof r == "string" || "path" in r ? r : r.ltr;
  }
  function Dy(e, t) {
    if (typeof e == "string")
      return !1;
    if ("langCodeMap" in e) {
      const n = t in e.langCodeMap ? e.langCodeMap[t] : e.default;
      if (typeof n == "string")
        return !1;
      e = n;
    }
    if ("shouldFlipExceptions" in e && Array.isArray(e.shouldFlipExceptions)) {
      const n = e.shouldFlipExceptions.indexOf(t);
      return n === void 0 || n === -1;
    }
    return "shouldFlip" in e ? e.shouldFlip : !1;
  }
  function Od(e) {
    const t = G(null);
    return xt(() => {
      const n = window.getComputedStyle(e.value).direction;
      t.value = n === "ltr" || n === "rtl" ? n : null;
    }), t;
  }
  function by(e) {
    const t = G("");
    return xt(() => {
      let n = e.value;
      for (; n && n.lang === ""; )
        n = n.parentElement;
      t.value = n ? n.lang : null;
    }), t;
  }
  const vy = Jt(q1), Ey = he({
    name: "CdxIcon",
    props: {
      icon: {
        type: [String, Object],
        required: !0
      },
      iconLabel: {
        type: String,
        default: ""
      },
      lang: {
        type: String,
        default: null
      },
      dir: {
        type: String,
        default: null
      },
      size: {
        type: String,
        default: "medium",
        validator: vy
      }
    },
    emits: ["click"],
    setup(e, { emit: t }) {
      const n = G(), r = Od(n), s = by(n), i = B(() => e.dir || r.value), o = B(() => e.lang || s.value), u = B(() => ({
        "cdx-icon--flipped": i.value === "rtl" && o.value !== null && Dy(e.icon, o.value),
        [`cdx-icon--${e.size}`]: !0
      })), l = B(
        () => yy(e.icon, o.value || "", i.value || "ltr")
      ), d = B(() => typeof l.value == "string" ? l.value : ""), a = B(() => typeof l.value != "string" ? l.value.path : "");
      return {
        rootElement: n,
        rootClasses: u,
        iconSvg: d,
        iconPath: a,
        onClick: (c) => {
          t("click", c);
        }
      };
    }
  }), ht = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t)
      n[r] = s;
    return n;
  }, wy = ["aria-hidden"], Cy = { key: 0 }, xy = ["innerHTML"], Ay = ["d"];
  function Fy(e, t, n, r, s, i) {
    return Y(), oe("span", {
      ref: "rootElement",
      class: ut(["cdx-icon", e.rootClasses]),
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o))
    }, [
      (Y(), oe("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 20 20",
        "aria-hidden": e.iconLabel ? void 0 : !0
      }, [
        e.iconLabel ? (Y(), oe("title", Cy, Ve(e.iconLabel), 1)) : Re("", !0),
        e.iconSvg ? (Y(), oe("g", {
          key: 1,
          innerHTML: e.iconSvg
        }, null, 8, xy)) : (Y(), oe("path", {
          key: 2,
          d: e.iconPath
        }, null, 8, Ay))
      ], 8, wy))
    ], 2);
  }
  const nt = /* @__PURE__ */ ht(Ey, [["render", Fy]]), ky = Jt(U1), Ny = Jt([...vd, ...z1]), lo = Jt(vd), Oy = (e) => {
    !e["aria-label"] && !e["aria-hidden"] && F(`icon-only buttons require one of the following attribute: aria-label or aria-hidden.
		See documentation on https://doc.wikimedia.org/codex/latest/components/button.html#default-icon-only`);
  };
  function Uo(e) {
    const t = [];
    for (const n of e)
      typeof n == "string" && n.trim() !== "" ? t.push(n) : Array.isArray(n) ? t.push(...Uo(n)) : typeof n == "object" && n && (typeof n.type == "string" || typeof n.type == "object" ? t.push(n) : n.type !== Ye && (typeof n.children == "string" && n.children.trim() !== "" ? t.push(n.children) : Array.isArray(n.children) && t.push(...Uo(n.children))));
    return t;
  }
  const Sy = (e, t) => {
    if (!e)
      return !1;
    const n = Uo(e);
    if (n.length !== 1)
      return !1;
    const r = n[0], s = typeof r == "object" && typeof r.type == "object" && "name" in r.type && r.type.name === nt.name, i = typeof r == "object" && r.type === "svg";
    return s || i ? (Oy(t), !0) : !1;
  }, Ty = he({
    name: "CdxButton",
    props: {
      action: {
        type: String,
        default: "default",
        validator: ky
      },
      weight: {
        type: String,
        default: "normal",
        validator: lo
      },
      type: {
        type: String,
        default: void 0,
        validator: Ny
      }
    },
    emits: ["click"],
    setup(e, { emit: t, slots: n, attrs: r }) {
      const s = G(!1), i = B(
        () => lo(e.type) ? void 0 : e.type
      ), o = B(
        () => lo(e.type) ? e.type : e.weight
      );
      return {
        rootClasses: B(() => {
          var u;
          return {
            [`cdx-button--action-${e.action}`]: !0,
            [`cdx-button--weight-${o.value}`]: !0,
            "cdx-button--framed": o.value !== "quiet",
            "cdx-button--icon-only": Sy((u = n.default) == null ? void 0 : u.call(n), r),
            "cdx-button--is-active": s.value
          };
        }),
        onClick: (u) => {
          t("click", u);
        },
        setActive: (u) => {
          s.value = u;
        },
        computedType: i
      };
    }
  }), My = ["type"];
  function By(e, t, n, r, s, i) {
    return Y(), oe("button", {
      class: ut(["cdx-button", e.rootClasses]),
      type: e.computedType,
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
      onKeydown: t[1] || (t[1] = Tr((o) => e.setActive(!0), ["space", "enter"])),
      onKeyup: t[2] || (t[2] = Tr((o) => e.setActive(!1), ["space", "enter"]))
    }, [
      it(e.$slots, "default")
    ], 42, My);
  }
  const cr = /* @__PURE__ */ ht(Ty, [["render", By]]);
  function Sd(e) {
    return e.label === void 0 ? e.value : e.label === null ? "" : e.label;
  }
  const Iy = he({
    name: "CdxButtonGroup",
    components: {
      CdxButton: cr,
      CdxIcon: nt
    },
    props: {
      buttons: {
        type: Array,
        required: !0,
        validator: (e) => Array.isArray(e) && e.length >= 1
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "click"
    ],
    setup() {
      return {
        getButtonLabel: Sd
      };
    }
  }), Py = { class: "cdx-button-group" };
  function Vy(e, t, n, r, s, i) {
    const o = qe("cdx-icon"), u = qe("cdx-button");
    return Y(), oe("div", Py, [
      (Y(!0), oe(Pe, null, ys(e.buttons, (l) => (Y(), Te(u, {
        key: l.value,
        disabled: l.disabled || e.disabled,
        "aria-label": l.ariaLabel,
        onClick: (d) => e.$emit("click", l.value)
      }, {
        default: Ke(() => [
          it(e.$slots, "default", { button: l }, () => [
            l.icon ? (Y(), Te(o, {
              key: 0,
              icon: l.icon
            }, null, 8, ["icon"])) : Re("", !0),
            _t(" " + Ve(e.getButtonLabel(l)), 1)
          ])
        ]),
        _: 2
      }, 1032, ["disabled", "aria-label", "onClick"]))), 128))
    ]);
  }
  const $y = /* @__PURE__ */ ht(Iy, [["render", Vy]]), Ry = he({
    name: "CdxThumbnail",
    components: { CdxIcon: nt },
    props: {
      thumbnail: {
        type: [Object, null],
        default: null
      },
      placeholderIcon: {
        type: [String, Object],
        default: hy
      }
    },
    setup: (e) => {
      const t = G(!1), n = G({}), r = (s) => {
        const i = s.replace(/([\\"\n])/g, "\\$1"), o = new Image();
        o.onload = () => {
          n.value = { backgroundImage: `url("${i}")` }, t.value = !0;
        }, o.onerror = () => {
          t.value = !1;
        }, o.src = i;
      };
      return xt(() => {
        var s;
        (s = e.thumbnail) != null && s.url && r(e.thumbnail.url);
      }), {
        thumbnailStyle: n,
        thumbnailLoaded: t
      };
    }
  }), Ly = { class: "cdx-thumbnail" }, jy = {
    key: 0,
    class: "cdx-thumbnail__placeholder"
  };
  function Yy(e, t, n, r, s, i) {
    const o = qe("cdx-icon");
    return Y(), oe("span", Ly, [
      e.thumbnailLoaded ? Re("", !0) : (Y(), oe("span", jy, [
        pe(o, {
          icon: e.placeholderIcon,
          class: "cdx-thumbnail__placeholder__icon"
        }, null, 8, ["icon"])
      ])),
      pe(pu, { name: "cdx-thumbnail__image" }, {
        default: Ke(() => [
          e.thumbnailLoaded ? (Y(), oe("span", {
            key: 0,
            style: Mn(e.thumbnailStyle),
            class: "cdx-thumbnail__image"
          }, null, 4)) : Re("", !0)
        ]),
        _: 1
      })
    ]);
  }
  const Td = /* @__PURE__ */ ht(Ry, [["render", Yy]]), Hy = he({
    name: "CdxCard",
    components: { CdxIcon: nt, CdxThumbnail: Td },
    props: {
      url: {
        type: String,
        default: ""
      },
      icon: {
        type: [String, Object],
        default: ""
      },
      thumbnail: {
        type: [Object, null],
        default: null
      },
      forceThumbnail: {
        type: Boolean,
        default: !1
      },
      customPlaceholderIcon: {
        type: [String, Object],
        default: void 0
      }
    },
    setup(e) {
      const t = B(() => !!e.url), n = B(() => t.value ? "a" : "span"), r = B(() => t.value ? e.url : void 0);
      return {
        isLink: t,
        contentTag: n,
        cardLink: r
      };
    }
  }), Wy = { class: "cdx-card__text" }, Uy = { class: "cdx-card__text__title" }, zy = {
    key: 0,
    class: "cdx-card__text__description"
  }, qy = {
    key: 1,
    class: "cdx-card__text__supporting-text"
  };
  function Ky(e, t, n, r, s, i) {
    const o = qe("cdx-thumbnail"), u = qe("cdx-icon");
    return Y(), Te(uu(e.contentTag), {
      href: e.cardLink,
      class: ut(["cdx-card", {
        "cdx-card--is-link": e.isLink,
        "cdx-card--title-only": !e.$slots.description && !e.$slots["supporting-text"]
      }])
    }, {
      default: Ke(() => [
        e.thumbnail || e.forceThumbnail ? (Y(), Te(o, {
          key: 0,
          thumbnail: e.thumbnail,
          "placeholder-icon": e.customPlaceholderIcon,
          class: "cdx-card__thumbnail"
        }, null, 8, ["thumbnail", "placeholder-icon"])) : e.icon ? (Y(), Te(u, {
          key: 1,
          icon: e.icon,
          class: "cdx-card__icon"
        }, null, 8, ["icon"])) : Re("", !0),
        Ce("span", Wy, [
          Ce("span", Uy, [
            it(e.$slots, "title")
          ]),
          e.$slots.description ? (Y(), oe("span", zy, [
            it(e.$slots, "description")
          ])) : Re("", !0),
          e.$slots["supporting-text"] ? (Y(), oe("span", qy, [
            it(e.$slots, "supporting-text")
          ])) : Re("", !0)
        ])
      ]),
      _: 3
    }, 8, ["href", "class"]);
  }
  const Gy = /* @__PURE__ */ ht(Hy, [["render", Ky]]);
  function gn(e, t, n) {
    return B({
      get: () => e.value,
      set: (r) => t(n || "update:modelValue", r)
    });
  }
  let co = 0;
  function Vt(e) {
    const t = Ai(), n = (t == null ? void 0 : t.props.id) || (t == null ? void 0 : t.attrs.id);
    return e ? `${ao}-${e}-${co++}` : n ? `${ao}-${n}-${co++}` : `${ao}-${co++}`;
  }
  const Jy = he({
    name: "CdxCheckbox",
    props: {
      modelValue: {
        type: [Boolean, Array],
        default: !1
      },
      inputValue: {
        type: [String, Number, Boolean],
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      indeterminate: {
        type: Boolean,
        default: !1
      },
      inline: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(e, { emit: t }) {
      const n = B(() => ({
        "cdx-checkbox--inline": e.inline
      })), r = G(), s = Vt("checkbox"), i = () => {
        r.value.click();
      }, o = gn(je(e, "modelValue"), t);
      return {
        rootClasses: n,
        input: r,
        checkboxId: s,
        clickInput: i,
        wrappedModel: o
      };
    }
  }), Zy = ["id", "value", "disabled", ".indeterminate"], Qy = /* @__PURE__ */ Ce("span", { class: "cdx-checkbox__icon" }, null, -1), Xy = ["for"];
  function eD(e, t, n, r, s, i) {
    return Y(), oe("span", {
      class: ut(["cdx-checkbox", e.rootClasses])
    }, [
      ou(Ce("input", {
        id: e.checkboxId,
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (o) => e.wrappedModel = o),
        class: "cdx-checkbox__input",
        type: "checkbox",
        value: e.inputValue,
        disabled: e.disabled,
        ".indeterminate": e.indeterminate,
        onKeydown: t[1] || (t[1] = Tr(mu((...o) => e.clickInput && e.clickInput(...o), ["prevent"]), ["enter"]))
      }, null, 40, Zy), [
        [fc, e.wrappedModel]
      ]),
      Qy,
      Ce("label", {
        class: "cdx-checkbox__label",
        for: e.checkboxId
      }, [
        it(e.$slots, "default")
      ], 8, Xy)
    ], 2);
  }
  const tD = /* @__PURE__ */ ht(Jy, [["render", eD]]), nD = {
    error: Fd,
    warning: xd,
    success: Nd
  };
  he({
    name: "CdxInfoChip",
    components: { CdxIcon: nt },
    props: {
      status: {
        type: String,
        default: "notice",
        validator: Ed
      },
      icon: {
        type: [String, Object],
        default: null
      }
    },
    setup(e) {
      const t = B(() => ({
        [`cdx-info-chip__icon--${e.status}`]: !0
      })), n = B(
        () => e.status === "notice" ? e.icon : nD[e.status]
      );
      return {
        iconClass: t,
        computedIcon: n
      };
    }
  });
  function rD(e) {
    return e.replace(/([\\{}()|.?*+\-^$[\]])/g, "\\$1");
  }
  const sD = "[̀-ͯ҃-҉֑-ׇֽֿׁׂׅׄؐ-ًؚ-ٰٟۖ-ۜ۟-۪ۤۧۨ-ܑۭܰ-݊ަ-ް߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣঁ-ঃ়া-ৄেৈো-্ৗৢৣ৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑੰੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣஂா-ூெ-ைொ-்ௗఀ-ఄా-ౄె-ైొ-్ౕౖౢౣಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣංඃ්ා-ුූෘ-ෟෲෳัิ-ฺ็-๎ັິ-ູົຼ່-ໍ༹༘༙༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏႚ-ႝ፝-፟ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝᠋-᠍ᢅᢆᢩᤠ-ᤫᤰ-᤻ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼᪰-᪾ᬀ-ᬄ᬴-᭄᭫-᭳ᮀ-ᮂᮡ-ᮭ᯦-᯳ᰤ-᰷᳐-᳔᳒-᳨᳭ᳲ-᳴᳷-᳹᷀-᷹᷻-᷿⃐-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꙯-꙲ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣠-꣱ꣿꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀ꧥꨩ-ꨶꩃꩌꩍꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭ﬞ︀-️︠-︯]";
  function iD(e, t) {
    if (!e)
      return [t, "", ""];
    const n = rD(e), r = new RegExp(
      n + sD + "*",
      "i"
    ).exec(t);
    if (!r || r.index === void 0)
      return [t, "", ""];
    const s = r.index, i = s + r[0].length, o = t.slice(s, i), u = t.slice(0, s), l = t.slice(i, t.length);
    return [u, o, l];
  }
  const oD = he({
    name: "CdxSearchResultTitle",
    props: {
      title: {
        type: String,
        required: !0
      },
      searchQuery: {
        type: String,
        default: ""
      }
    },
    setup: (e) => ({
      titleChunks: B(() => iD(e.searchQuery, String(e.title)))
    })
  }), uD = { class: "cdx-search-result-title" }, aD = { class: "cdx-search-result-title__match" };
  function lD(e, t, n, r, s, i) {
    return Y(), oe("span", uD, [
      Ce("bdi", null, [
        _t(Ve(e.titleChunks[0]), 1),
        Ce("span", aD, Ve(e.titleChunks[1]), 1),
        _t(Ve(e.titleChunks[2]), 1)
      ])
    ]);
  }
  const cD = /* @__PURE__ */ ht(oD, [["render", lD]]), dD = he({
    name: "CdxMenuItem",
    components: { CdxIcon: nt, CdxThumbnail: Td, CdxSearchResultTitle: cD },
    props: {
      id: {
        type: String,
        required: !0
      },
      value: {
        type: [String, Number],
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      selected: {
        type: Boolean,
        default: !1
      },
      active: {
        type: Boolean,
        default: !1
      },
      highlighted: {
        type: Boolean,
        default: !1
      },
      label: {
        type: String,
        default: ""
      },
      match: {
        type: String,
        default: ""
      },
      supportingText: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      icon: {
        type: [String, Object],
        default: ""
      },
      showThumbnail: {
        type: Boolean,
        default: !1
      },
      thumbnail: {
        type: [Object, null],
        default: null
      },
      description: {
        type: [String, null],
        default: ""
      },
      searchQuery: {
        type: String,
        default: ""
      },
      boldLabel: {
        type: Boolean,
        default: !1
      },
      hideDescriptionOverflow: {
        type: Boolean,
        default: !1
      },
      language: {
        type: Object,
        default: () => ({})
      }
    },
    emits: [
      "change"
    ],
    setup: (e, { emit: t }) => {
      const n = () => {
        e.highlighted || t("change", "highlighted", !0);
      }, r = () => {
        t("change", "highlighted", !1);
      }, s = (a) => {
        a.button === 0 && t("change", "active", !0);
      }, i = () => {
        t("change", "selected", !0);
      }, o = B(() => e.searchQuery.length > 0), u = B(() => ({
        "cdx-menu-item--selected": e.selected,
        "cdx-menu-item--active": e.active && e.highlighted,
        "cdx-menu-item--highlighted": e.highlighted,
        "cdx-menu-item--enabled": !e.disabled,
        "cdx-menu-item--disabled": e.disabled,
        "cdx-menu-item--highlight-query": o.value,
        "cdx-menu-item--bold-label": e.boldLabel,
        "cdx-menu-item--has-description": !!e.description,
        "cdx-menu-item--hide-description-overflow": e.hideDescriptionOverflow
      })), l = B(() => e.url ? "a" : "span"), d = B(() => e.label || String(e.value));
      return {
        onMouseMove: n,
        onMouseLeave: r,
        onMouseDown: s,
        onClick: i,
        highlightQuery: o,
        rootClasses: u,
        contentTag: l,
        title: d
      };
    }
  }), fD = ["id", "aria-disabled", "aria-selected"], hD = { class: "cdx-menu-item__text" }, pD = ["lang"], mD = ["lang"], gD = ["lang"], _D = ["lang"];
  function yD(e, t, n, r, s, i) {
    const o = qe("cdx-thumbnail"), u = qe("cdx-icon"), l = qe("cdx-search-result-title");
    return Y(), oe("li", {
      id: e.id,
      role: "option",
      class: ut(["cdx-menu-item", e.rootClasses]),
      "aria-disabled": e.disabled,
      "aria-selected": e.selected,
      onMousemove: t[0] || (t[0] = (...d) => e.onMouseMove && e.onMouseMove(...d)),
      onMouseleave: t[1] || (t[1] = (...d) => e.onMouseLeave && e.onMouseLeave(...d)),
      onMousedown: t[2] || (t[2] = mu((...d) => e.onMouseDown && e.onMouseDown(...d), ["prevent"])),
      onClick: t[3] || (t[3] = (...d) => e.onClick && e.onClick(...d))
    }, [
      it(e.$slots, "default", {}, () => [
        (Y(), Te(uu(e.contentTag), {
          href: e.url ? e.url : void 0,
          class: "cdx-menu-item__content"
        }, {
          default: Ke(() => {
            var d, a, c, f, m, _;
            return [
              e.showThumbnail ? (Y(), Te(o, {
                key: 0,
                thumbnail: e.thumbnail,
                class: "cdx-menu-item__thumbnail"
              }, null, 8, ["thumbnail"])) : e.icon ? (Y(), Te(u, {
                key: 1,
                icon: e.icon,
                class: "cdx-menu-item__icon"
              }, null, 8, ["icon"])) : Re("", !0),
              Ce("span", hD, [
                e.highlightQuery ? (Y(), Te(l, {
                  key: 0,
                  title: e.title,
                  "search-query": e.searchQuery,
                  lang: (d = e.language) == null ? void 0 : d.label
                }, null, 8, ["title", "search-query", "lang"])) : (Y(), oe("span", {
                  key: 1,
                  class: "cdx-menu-item__text__label",
                  lang: (a = e.language) == null ? void 0 : a.label
                }, [
                  Ce("bdi", null, Ve(e.title), 1)
                ], 8, pD)),
                e.match ? (Y(), oe(Pe, { key: 2 }, [
                  _t(Ve(" ") + " "),
                  e.highlightQuery ? (Y(), Te(l, {
                    key: 0,
                    title: e.match,
                    "search-query": e.searchQuery,
                    lang: (c = e.language) == null ? void 0 : c.match
                  }, null, 8, ["title", "search-query", "lang"])) : (Y(), oe("span", {
                    key: 1,
                    class: "cdx-menu-item__text__match",
                    lang: (f = e.language) == null ? void 0 : f.match
                  }, [
                    Ce("bdi", null, Ve(e.match), 1)
                  ], 8, mD))
                ], 64)) : Re("", !0),
                e.supportingText ? (Y(), oe(Pe, { key: 3 }, [
                  _t(Ve(" ") + " "),
                  Ce("span", {
                    class: "cdx-menu-item__text__supporting-text",
                    lang: (m = e.language) == null ? void 0 : m.supportingText
                  }, [
                    Ce("bdi", null, Ve(e.supportingText), 1)
                  ], 8, gD)
                ], 64)) : Re("", !0),
                e.description ? (Y(), oe("span", {
                  key: 4,
                  class: "cdx-menu-item__text__description",
                  lang: (_ = e.language) == null ? void 0 : _.description
                }, [
                  Ce("bdi", null, Ve(e.description), 1)
                ], 8, _D)) : Re("", !0)
              ])
            ];
          }),
          _: 1
        }, 8, ["href"]))
      ])
    ], 42, fD);
  }
  const DD = /* @__PURE__ */ ht(dD, [["render", yD]]), bD = he({
    name: "CdxProgressBar",
    props: {
      inline: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      return {
        rootClasses: B(() => ({
          "cdx-progress-bar--block": !e.inline,
          "cdx-progress-bar--inline": e.inline,
          "cdx-progress-bar--enabled": !e.disabled,
          "cdx-progress-bar--disabled": e.disabled
        }))
      };
    }
  }), vD = ["aria-disabled"], ED = /* @__PURE__ */ Ce("div", { class: "cdx-progress-bar__bar" }, null, -1), wD = [
    ED
  ];
  function CD(e, t, n, r, s, i) {
    return Y(), oe("div", {
      class: ut(["cdx-progress-bar", e.rootClasses]),
      role: "progressbar",
      "aria-disabled": e.disabled,
      "aria-valuemin": "0",
      "aria-valuemax": "100"
    }, wD, 10, vD);
  }
  const xD = /* @__PURE__ */ ht(bD, [["render", CD]]);
  function zo(e, t) {
    const n = G(!1);
    let r = !1;
    if (typeof window != "object" || !("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype))
      return n;
    const s = new window.IntersectionObserver(
      (i) => {
        const o = i[0];
        o && (n.value = o.isIntersecting);
      },
      t
    );
    return xt(() => {
      r = !0, e.value && s.observe(e.value);
    }), Br(() => {
      r = !1, s.disconnect();
    }), Qe(e, (i) => {
      !r || (s.disconnect(), n.value = !1, i && s.observe(i));
    }), n;
  }
  function dr(e, t = B(() => ({}))) {
    const n = B(() => {
      const i = Wo(t.value, []);
      return e.class && e.class.split(" ").forEach((o) => {
        i[o] = !0;
      }), i;
    }), r = B(() => {
      if ("style" in e)
        return e.style;
    }), s = B(() => Wo(e, ["class", "style"]));
    return {
      rootClasses: n,
      rootStyle: r,
      otherAttrs: s
    };
  }
  const AD = he({
    name: "CdxMenu",
    components: {
      CdxMenuItem: DD,
      CdxProgressBar: xD
    },
    inheritAttrs: !1,
    props: {
      menuItems: {
        type: Array,
        required: !0
      },
      footer: {
        type: Object,
        default: null
      },
      selected: {
        type: [String, Number, null],
        required: !0
      },
      expanded: {
        type: Boolean,
        required: !0
      },
      showPending: {
        type: Boolean,
        default: !1
      },
      visibleItemLimit: {
        type: Number,
        default: null
      },
      showThumbnail: {
        type: Boolean,
        default: !1
      },
      boldLabel: {
        type: Boolean,
        default: !1
      },
      hideDescriptionOverflow: {
        type: Boolean,
        default: !1
      },
      searchQuery: {
        type: String,
        default: ""
      },
      showNoResultsSlot: {
        type: Boolean,
        default: null
      }
    },
    emits: [
      "update:selected",
      "update:expanded",
      "menu-item-click",
      "menu-item-keyboard-navigation",
      "load-more"
    ],
    expose: [
      "clearActive",
      "getHighlightedMenuItem",
      "getHighlightedViaKeyboard",
      "delegateKeyNavigation"
    ],
    setup(e, { emit: t, slots: n, attrs: r }) {
      const s = B(() => (e.footer && e.menuItems ? [...e.menuItems, e.footer] : e.menuItems).map((K) => W1(H1({}, K), {
        id: Vt("menu-item")
      }))), i = B(() => n["no-results"] ? e.showNoResultsSlot !== null ? e.showNoResultsSlot : s.value.length === 0 : !1), o = G(null), u = G(!1), l = G(null);
      function d() {
        return s.value.find(
          (K) => K.value === e.selected
        );
      }
      function a(K, ee) {
        var V;
        if (!(ee && ee.disabled))
          switch (K) {
            case "selected":
              t("update:selected", (V = ee == null ? void 0 : ee.value) != null ? V : null), t("update:expanded", !1), l.value = null;
              break;
            case "highlighted":
              o.value = ee || null, u.value = !1;
              break;
            case "highlightedViaKeyboard":
              o.value = ee || null, u.value = !0;
              break;
            case "active":
              l.value = ee || null;
              break;
          }
      }
      const c = B(() => {
        if (o.value !== null)
          return s.value.findIndex(
            (K) => K.value === o.value.value
          );
      });
      function f(K) {
        !K || (a("highlightedViaKeyboard", K), t("menu-item-keyboard-navigation", K));
      }
      function m(K) {
        var ee;
        const V = (He) => {
          for (let at = He - 1; at >= 0; at--)
            if (!s.value[at].disabled)
              return s.value[at];
        };
        K = K || s.value.length;
        const te = (ee = V(K)) != null ? ee : V(s.value.length);
        f(te);
      }
      function _(K) {
        const ee = (te) => s.value.find((He, at) => !He.disabled && at > te);
        K = K ?? -1;
        const V = ee(K) || ee(-1);
        f(V);
      }
      function D(K, ee = !0) {
        function V() {
          t("update:expanded", !0), a("highlighted", d());
        }
        function te() {
          ee && (K.preventDefault(), K.stopPropagation());
        }
        switch (K.key) {
          case "Enter":
          case " ":
            return te(), e.expanded ? (o.value && u.value && t("update:selected", o.value.value), t("update:expanded", !1)) : V(), !0;
          case "Tab":
            return e.expanded && (o.value && u.value && t("update:selected", o.value.value), t("update:expanded", !1)), !0;
          case "ArrowUp":
            return te(), e.expanded ? (o.value === null && a("highlightedViaKeyboard", d()), m(c.value)) : V(), z(), !0;
          case "ArrowDown":
            return te(), e.expanded ? (o.value === null && a("highlightedViaKeyboard", d()), _(c.value)) : V(), z(), !0;
          case "Home":
            return te(), e.expanded ? (o.value === null && a("highlightedViaKeyboard", d()), _()) : V(), z(), !0;
          case "End":
            return te(), e.expanded ? (o.value === null && a("highlightedViaKeyboard", d()), m()) : V(), z(), !0;
          case "Escape":
            return te(), t("update:expanded", !1), !0;
          default:
            return !1;
        }
      }
      function S() {
        a("active");
      }
      const I = [], P = G(void 0), $ = zo(
        P,
        { threshold: 0.8 }
      );
      Qe($, (K) => {
        K && t("load-more");
      });
      function L(K, ee) {
        if (K) {
          I[ee] = K.$el;
          const V = e.visibleItemLimit;
          if (!V || e.menuItems.length < V)
            return;
          const te = Math.min(
            V,
            Math.max(2, Math.floor(0.2 * e.menuItems.length))
          );
          ee === e.menuItems.length - te && (P.value = K.$el);
        }
      }
      function z() {
        if (!e.visibleItemLimit || e.visibleItemLimit > e.menuItems.length || c.value === void 0)
          return;
        const K = c.value >= 0 ? c.value : 0;
        I[K].scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
      const fe = G(null), j = G(null);
      function A() {
        if (j.value = null, !e.visibleItemLimit || I.length <= e.visibleItemLimit) {
          fe.value = null;
          return;
        }
        const K = I[0], ee = I[e.visibleItemLimit];
        if (fe.value = g(
          K,
          ee
        ), e.footer) {
          const V = I[I.length - 1];
          j.value = V.scrollHeight;
        }
      }
      function g(K, ee) {
        const V = K.getBoundingClientRect().top;
        return ee.getBoundingClientRect().top - V + 2;
      }
      xt(() => {
        document.addEventListener("mouseup", S);
      }), Br(() => {
        document.removeEventListener("mouseup", S);
      }), Qe(je(e, "expanded"), (K) => za(this, null, function* () {
        const ee = d();
        !K && o.value && ee === void 0 && a("highlighted"), K && ee !== void 0 && a("highlighted", ee), K && (yield Cn(), A(), yield Cn(), z());
      })), Qe(je(e, "menuItems"), (K) => za(this, null, function* () {
        K.length < I.length && (I.length = K.length), e.expanded && (yield Cn(), A(), yield Cn(), z());
      }), { deep: !0 });
      const b = B(() => ({
        "max-height": fe.value ? `${fe.value}px` : void 0,
        "overflow-y": fe.value ? "scroll" : void 0,
        "margin-bottom": j.value ? `${j.value}px` : void 0
      })), H = B(() => ({
        "cdx-menu--has-footer": !!e.footer,
        "cdx-menu--has-sticky-footer": !!e.footer && !!fe.value
      })), {
        rootClasses: w,
        rootStyle: ue,
        otherAttrs: ke
      } = dr(r, H);
      return {
        listBoxStyle: b,
        rootClasses: w,
        rootStyle: ue,
        otherAttrs: ke,
        assignTemplateRef: L,
        computedMenuItems: s,
        computedShowNoResultsSlot: i,
        highlightedMenuItem: o,
        highlightedViaKeyboard: u,
        activeMenuItem: l,
        handleMenuItemChange: a,
        handleKeyNavigation: D
      };
    },
    methods: {
      getHighlightedMenuItem() {
        return this.highlightedMenuItem;
      },
      getHighlightedViaKeyboard() {
        return this.highlightedViaKeyboard;
      },
      clearActive() {
        this.handleMenuItemChange("active");
      },
      delegateKeyNavigation(e, t = !0) {
        return this.handleKeyNavigation(e, t);
      }
    }
  }), FD = {
    key: 0,
    class: "cdx-menu__pending cdx-menu-item"
  }, kD = {
    key: 1,
    class: "cdx-menu__no-results cdx-menu-item"
  };
  function ND(e, t, n, r, s, i) {
    const o = qe("cdx-menu-item"), u = qe("cdx-progress-bar");
    return ou((Y(), oe("div", {
      class: ut(["cdx-menu", e.rootClasses]),
      style: Mn(e.rootStyle)
    }, [
      Ce("ul", ir({
        class: "cdx-menu__listbox",
        role: "listbox",
        "aria-multiselectable": "false",
        style: e.listBoxStyle
      }, e.otherAttrs), [
        e.showPending && e.computedMenuItems.length === 0 && e.$slots.pending ? (Y(), oe("li", FD, [
          it(e.$slots, "pending")
        ])) : Re("", !0),
        e.computedShowNoResultsSlot ? (Y(), oe("li", kD, [
          it(e.$slots, "no-results")
        ])) : Re("", !0),
        (Y(!0), oe(Pe, null, ys(e.computedMenuItems, (l, d) => {
          var a, c;
          return Y(), Te(o, ir({
            key: l.value,
            ref_for: !0,
            ref: (f) => e.assignTemplateRef(f, d)
          }, l, {
            selected: l.value === e.selected,
            active: l.value === ((a = e.activeMenuItem) == null ? void 0 : a.value),
            highlighted: l.value === ((c = e.highlightedMenuItem) == null ? void 0 : c.value),
            "show-thumbnail": e.showThumbnail,
            "bold-label": e.boldLabel,
            "hide-description-overflow": e.hideDescriptionOverflow,
            "search-query": e.searchQuery,
            onChange: (f, m) => e.handleMenuItemChange(f, m && l),
            onClick: (f) => e.$emit("menu-item-click", l)
          }), {
            default: Ke(() => {
              var f, m;
              return [
                it(e.$slots, "default", {
                  menuItem: l,
                  active: l.value === ((f = e.activeMenuItem) == null ? void 0 : f.value) && l.value === ((m = e.highlightedMenuItem) == null ? void 0 : m.value)
                })
              ];
            }),
            _: 2
          }, 1040, ["selected", "active", "highlighted", "show-thumbnail", "bold-label", "hide-description-overflow", "search-query", "onChange", "onClick"]);
        }), 128)),
        e.showPending ? (Y(), Te(u, {
          key: 2,
          class: "cdx-menu__progress-bar",
          inline: !0
        })) : Re("", !0)
      ], 16)
    ], 6)), [
      [Jp, e.expanded]
    ]);
  }
  const Wi = /* @__PURE__ */ ht(AD, [["render", ND]]), OD = Jt(G1), SD = Jt(Hi), TD = he({
    name: "CdxTextInput",
    components: { CdxIcon: nt },
    inheritAttrs: !1,
    expose: ["focus"],
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      inputType: {
        type: String,
        default: "text",
        validator: OD
      },
      status: {
        type: String,
        default: "default",
        validator: SD
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      startIcon: {
        type: [String, Object],
        default: void 0
      },
      endIcon: {
        type: [String, Object],
        default: void 0
      },
      clearable: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue",
      "keydown",
      "input",
      "change",
      "focus",
      "blur"
    ],
    setup(e, { emit: t, attrs: n }) {
      const r = gn(je(e, "modelValue"), t), s = B(() => e.clearable && !!r.value && !e.disabled), i = B(() => ({
        "cdx-text-input--has-start-icon": !!e.startIcon,
        "cdx-text-input--has-end-icon": !!e.endIcon,
        "cdx-text-input--clearable": s.value,
        [`cdx-text-input--status-${e.status}`]: !0
      })), {
        rootClasses: o,
        rootStyle: u,
        otherAttrs: l
      } = dr(n, i), d = B(() => ({
        "cdx-text-input__input--has-value": !!r.value
      }));
      return {
        wrappedModel: r,
        isClearable: s,
        rootClasses: o,
        rootStyle: u,
        otherAttrs: l,
        inputClasses: d,
        onClear: () => {
          r.value = "";
        },
        onInput: (a) => {
          t("input", a);
        },
        onChange: (a) => {
          t("change", a);
        },
        onKeydown: (a) => {
          (a.key === "Home" || a.key === "End") && !a.ctrlKey && !a.metaKey || t("keydown", a);
        },
        onFocus: (a) => {
          t("focus", a);
        },
        onBlur: (a) => {
          t("blur", a);
        },
        cdxIconClear: fy
      };
    },
    methods: {
      focus() {
        this.$refs.input.focus();
      }
    }
  }), MD = ["type", "disabled"];
  function BD(e, t, n, r, s, i) {
    const o = qe("cdx-icon");
    return Y(), oe("div", {
      class: ut(["cdx-text-input", e.rootClasses]),
      style: Mn(e.rootStyle)
    }, [
      ou(Ce("input", ir({
        ref: "input",
        "onUpdate:modelValue": t[0] || (t[0] = (u) => e.wrappedModel = u),
        class: ["cdx-text-input__input", e.inputClasses]
      }, e.otherAttrs, {
        type: e.inputType,
        disabled: e.disabled,
        onInput: t[1] || (t[1] = (...u) => e.onInput && e.onInput(...u)),
        onChange: t[2] || (t[2] = (...u) => e.onChange && e.onChange(...u)),
        onFocus: t[3] || (t[3] = (...u) => e.onFocus && e.onFocus(...u)),
        onBlur: t[4] || (t[4] = (...u) => e.onBlur && e.onBlur(...u)),
        onKeydown: t[5] || (t[5] = (...u) => e.onKeydown && e.onKeydown(...u))
      }), null, 16, MD), [
        [Up, e.wrappedModel]
      ]),
      e.startIcon ? (Y(), Te(o, {
        key: 0,
        icon: e.startIcon,
        class: "cdx-text-input__icon-vue cdx-text-input__start-icon"
      }, null, 8, ["icon"])) : Re("", !0),
      e.endIcon ? (Y(), Te(o, {
        key: 1,
        icon: e.endIcon,
        class: "cdx-text-input__icon-vue cdx-text-input__end-icon"
      }, null, 8, ["icon"])) : Re("", !0),
      e.isClearable ? (Y(), Te(o, {
        key: 2,
        icon: e.cdxIconClear,
        class: "cdx-text-input__icon-vue cdx-text-input__clear-icon",
        onMousedown: t[6] || (t[6] = mu(() => {
        }, ["prevent"])),
        onClick: e.onClear
      }, null, 8, ["icon", "onClick"])) : Re("", !0)
    ], 6);
  }
  const $u = /* @__PURE__ */ ht(TD, [["render", BD]]);
  function Ru(e) {
    const t = G(
      { width: void 0, height: void 0 }
    );
    if (typeof window != "object" || !("ResizeObserver" in window) || !("ResizeObserverEntry" in window))
      return t;
    const n = new window.ResizeObserver(
      (s) => {
        const i = s[0];
        i && (t.value = {
          width: i.borderBoxSize[0].inlineSize,
          height: i.borderBoxSize[0].blockSize
        });
      }
    );
    let r = !1;
    return xt(() => {
      r = !0, e.value && n.observe(e.value);
    }), Br(() => {
      r = !1, n.disconnect();
    }), Qe(e, (s) => {
      !r || (n.disconnect(), t.value = {
        width: void 0,
        height: void 0
      }, s && n.observe(s));
    }), t;
  }
  const ID = Jt(Hi), Lu = he({
    name: "CdxCombobox",
    components: {
      CdxButton: cr,
      CdxIcon: nt,
      CdxMenu: Wi,
      CdxTextInput: $u
    },
    inheritAttrs: !1,
    props: {
      menuItems: {
        type: Array,
        required: !0
      },
      selected: {
        type: [String, Number],
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      menuConfig: {
        type: Object,
        default: () => ({})
      },
      status: {
        type: String,
        default: "default",
        validator: ID
      }
    },
    emits: [
      "update:selected",
      "load-more"
    ],
    setup(e, { emit: t, attrs: n, slots: r }) {
      const s = G(), i = G(), o = G(), u = Vt("combobox"), l = je(e, "selected"), d = gn(l, t, "update:selected"), a = G(!1), c = G(!1), f = B(() => {
        var A, g;
        return (g = (A = o.value) == null ? void 0 : A.getHighlightedMenuItem()) == null ? void 0 : g.id;
      }), m = B(() => ({
        "cdx-combobox--expanded": a.value,
        "cdx-combobox--disabled": e.disabled
      })), _ = Ru(i), D = B(() => {
        var A;
        return `${(A = _.value.width) != null ? A : 0}px`;
      }), {
        rootClasses: S,
        rootStyle: I,
        otherAttrs: P
      } = dr(n, m);
      function $() {
        c.value && a.value ? a.value = !1 : (e.menuItems.length > 0 || r["no-results"]) && (a.value = !0);
      }
      function L() {
        a.value = c.value && a.value;
      }
      function z() {
        e.disabled || (c.value = !0);
      }
      function fe() {
        var A;
        e.disabled || (A = s.value) == null || A.focus();
      }
      function j(A) {
        !o.value || e.disabled || e.menuItems.length === 0 || A.key === " " || o.value.delegateKeyNavigation(A);
      }
      return Qe(a, () => {
        c.value = !1;
      }), {
        input: s,
        inputWrapper: i,
        currentWidthInPx: D,
        menu: o,
        menuId: u,
        modelWrapper: d,
        expanded: a,
        highlightedId: f,
        onInputFocus: $,
        onInputBlur: L,
        onKeydown: j,
        onButtonClick: fe,
        onButtonMousedown: z,
        cdxIconExpand: kd,
        rootClasses: S,
        rootStyle: I,
        otherAttrs: P
      };
    }
  }), qa = () => {
    hu((e) => ({
      "21ba103d": e.currentWidthInPx
    }));
  }, Ka = Lu.setup;
  Lu.setup = Ka ? (e, t) => (qa(), Ka(e, t)) : qa;
  const PD = {
    ref: "inputWrapper",
    class: "cdx-combobox__input-wrapper"
  };
  function VD(e, t, n, r, s, i) {
    const o = qe("cdx-text-input"), u = qe("cdx-icon"), l = qe("cdx-button"), d = qe("cdx-menu");
    return Y(), oe("div", {
      class: ut(["cdx-combobox", e.rootClasses]),
      style: Mn(e.rootStyle)
    }, [
      Ce("div", PD, [
        pe(o, ir({
          ref: "input",
          modelValue: e.modelWrapper,
          "onUpdate:modelValue": t[0] || (t[0] = (a) => e.modelWrapper = a)
        }, e.otherAttrs, {
          class: "cdx-combobox__input",
          "aria-activedescendant": e.highlightedId,
          "aria-expanded": e.expanded,
          "aria-controls": e.menuId,
          "aria-owns": e.menuId,
          disabled: e.disabled,
          status: e.status,
          "aria-autocomplete": "list",
          autocomplete: "off",
          role: "combobox",
          onKeydown: e.onKeydown,
          onFocus: e.onInputFocus,
          onBlur: e.onInputBlur
        }), null, 16, ["modelValue", "aria-activedescendant", "aria-expanded", "aria-controls", "aria-owns", "disabled", "status", "onKeydown", "onFocus", "onBlur"]),
        pe(l, {
          class: "cdx-combobox__expand-button",
          "aria-hidden": "true",
          disabled: e.disabled,
          tabindex: "-1",
          type: "button",
          onMousedown: e.onButtonMousedown,
          onClick: e.onButtonClick
        }, {
          default: Ke(() => [
            pe(u, {
              class: "cdx-combobox__expand-icon",
              icon: e.cdxIconExpand
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["disabled", "onMousedown", "onClick"])
      ], 512),
      pe(d, ir({
        id: e.menuId,
        ref: "menu",
        selected: e.modelWrapper,
        "onUpdate:selected": t[1] || (t[1] = (a) => e.modelWrapper = a),
        expanded: e.expanded,
        "onUpdate:expanded": t[2] || (t[2] = (a) => e.expanded = a),
        "menu-items": e.menuItems
      }, e.menuConfig, {
        onLoadMore: t[3] || (t[3] = (a) => e.$emit("load-more"))
      }), {
        default: Ke(({ menuItem: a }) => [
          it(e.$slots, "menu-item", { menuItem: a })
        ]),
        "no-results": Ke(() => [
          it(e.$slots, "no-results")
        ]),
        _: 3
      }, 16, ["id", "selected", "expanded", "menu-items"])
    ], 6);
  }
  const $D = /* @__PURE__ */ ht(Lu, [["render", VD]]);
  he({
    name: "CdxDialog",
    components: {
      CdxButton: cr,
      CdxIcon: nt
    },
    inheritAttrs: !1,
    props: {
      open: {
        type: Boolean,
        default: !1
      },
      title: {
        type: String,
        required: !0
      },
      subtitle: {
        type: String,
        required: !1,
        default: null
      },
      hideTitle: {
        type: Boolean,
        default: !1
      },
      closeButtonLabel: {
        type: String,
        default: ""
      },
      primaryAction: {
        type: Object,
        default: null
      },
      defaultAction: {
        type: Object,
        default: null
      },
      stackedActions: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:open",
      "primary",
      "default"
    ],
    setup(e, { emit: t }) {
      const n = Vt("dialog-label"), r = G(), s = G(), i = G(), o = G(), u = G(), l = B(() => !e.hideTitle || !!e.closeButtonLabel), d = B(() => !!e.primaryAction || !!e.defaultAction), a = B(() => ({
        "cdx-dialog--vertical-actions": e.stackedActions,
        "cdx-dialog--horizontal-actions": !e.stackedActions
      })), c = G(0);
      function f() {
        t("update:open", !1);
      }
      function m() {
        D(r.value);
      }
      function _() {
        D(r.value, !0);
      }
      function D(S, I = !1) {
        let P = Array.from(
          S.querySelectorAll(`
					input, select, textarea, button, object, a, area,
					[contenteditable], [tabindex]:not([tabindex^="-"])
				`)
        );
        I && (P = P.reverse());
        for (const $ of P)
          if ($.focus(), document.activeElement === $)
            return !0;
        return !1;
      }
      return Qe(je(e, "open"), (S) => {
        S ? (c.value = window.innerWidth - document.documentElement.clientWidth, document.documentElement.style.setProperty("margin-right", `${c.value}px`), document.body.classList.add("cdx-dialog-open"), Cn(() => {
          var I;
          D(s.value) || (I = i.value) == null || I.focus();
        })) : (document.body.classList.remove("cdx-dialog-open"), document.documentElement.style.removeProperty("margin-right"));
      }), {
        close: f,
        cdxIconClose: Ad,
        labelId: n,
        rootClasses: a,
        dialogElement: r,
        focusTrapStart: o,
        focusTrapEnd: u,
        focusFirst: m,
        focusLast: _,
        dialogBody: s,
        focusHolder: i,
        showHeader: l,
        showFooterActions: d
      };
    }
  });
  const RD = Jt(Hi), Md = he({
    name: "CdxLookup",
    components: {
      CdxMenu: Wi,
      CdxTextInput: $u
    },
    inheritAttrs: !1,
    props: {
      selected: {
        type: [String, Number, null],
        required: !0
      },
      menuItems: {
        type: Array,
        required: !0
      },
      initialInputValue: {
        type: [String, Number],
        default: ""
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      menuConfig: {
        type: Object,
        default: () => ({})
      },
      status: {
        type: String,
        default: "default",
        validator: RD
      }
    },
    emits: [
      "update:selected",
      "input",
      "load-more"
    ],
    setup: (e, { emit: t, attrs: n, slots: r }) => {
      const s = G(), i = G(), o = Vt("lookup-menu"), u = G(!1), l = G(!1), d = G(!1), a = je(e, "selected"), c = gn(a, t, "update:selected"), f = B(
        () => e.menuItems.find((g) => g.value === e.selected)
      ), m = B(() => {
        var g, b;
        return (b = (g = i.value) == null ? void 0 : g.getHighlightedMenuItem()) == null ? void 0 : b.id;
      }), _ = G(e.initialInputValue), D = Ru(s), S = B(() => {
        var g;
        return `${(g = D.value.width) != null ? g : 0}px`;
      }), I = B(() => ({
        "cdx-lookup--disabled": e.disabled,
        "cdx-lookup--pending": u.value
      })), {
        rootClasses: P,
        rootStyle: $,
        otherAttrs: L
      } = dr(n, I);
      function z(g) {
        f.value && f.value.label !== g && f.value.value !== g && (c.value = null), g === "" ? (l.value = !1, u.value = !1) : u.value = !0, t("input", g);
      }
      function fe() {
        d.value = !0, _.value !== null && _.value !== "" && (e.menuItems.length > 0 || r["no-results"]) && (l.value = !0);
      }
      function j() {
        d.value = !1, l.value = !1;
      }
      function A(g) {
        !i.value || e.disabled || e.menuItems.length === 0 && !r["no-results"] || g.key === " " || i.value.delegateKeyNavigation(g);
      }
      return Qe(a, (g) => {
        if (g !== null) {
          const b = f.value ? f.value.label || f.value.value : "";
          _.value !== b && (_.value = b, t("input", _.value));
        }
      }), Qe(je(e, "menuItems"), (g) => {
        d.value && u.value && (g.length > 0 || r["no-results"]) && (l.value = !0), g.length === 0 && !r["no-results"] && (l.value = !1), u.value = !1;
      }), {
        rootElement: s,
        currentWidthInPx: S,
        menu: i,
        menuId: o,
        highlightedId: m,
        inputValue: _,
        modelWrapper: c,
        expanded: l,
        onInputBlur: j,
        rootClasses: P,
        rootStyle: $,
        otherAttrs: L,
        onUpdateInput: z,
        onInputFocus: fe,
        onKeydown: A
      };
    }
  }), Ga = () => {
    hu((e) => ({
      "51c485f8": e.currentWidthInPx
    }));
  }, Ja = Md.setup;
  Md.setup = Ja ? (e, t) => (Ga(), Ja(e, t)) : Ga;
  const LD = {
    notice: py,
    error: Fd,
    warning: xd,
    success: Nd
  };
  he({
    name: "CdxMessage",
    components: { CdxButton: cr, CdxIcon: nt },
    props: {
      type: {
        type: String,
        default: "notice",
        validator: Ed
      },
      inline: {
        type: Boolean,
        default: !1
      },
      icon: {
        type: [String, Object],
        default: null
      },
      fadeIn: {
        type: Boolean,
        default: !1
      },
      dismissButtonLabel: {
        type: String,
        default: ""
      },
      autoDismiss: {
        type: [Boolean, Number],
        default: !1,
        validator: (e) => typeof e == "boolean" || typeof e == "number" && e > 0
      }
    },
    emits: [
      "user-dismissed",
      "auto-dismissed"
    ],
    setup(e, { emit: t }) {
      const n = G(!1), r = B(
        () => e.inline === !1 && e.dismissButtonLabel.length > 0
      ), s = B(() => e.autoDismiss === !1 ? !1 : e.autoDismiss === !0 ? 4e3 : e.autoDismiss), i = B(() => ({
        "cdx-message--inline": e.inline,
        "cdx-message--block": !e.inline,
        "cdx-message--user-dismissable": r.value,
        [`cdx-message--${e.type}`]: !0
      })), o = B(
        () => e.icon && e.type === "notice" ? e.icon : LD[e.type]
      ), u = G("");
      function l(d) {
        n.value || (u.value = d === "user-dismissed" ? "cdx-message-leave-active-user" : "cdx-message-leave-active-system", n.value = !0, t(d));
      }
      return xt(() => {
        s.value && setTimeout(() => l("auto-dismissed"), s.value);
      }), {
        dismissed: n,
        userDismissable: r,
        rootClasses: i,
        leaveActiveClass: u,
        computedIcon: o,
        onDismiss: l,
        cdxIconClose: Ad
      };
    }
  });
  he({
    name: "CdxRadio",
    props: {
      modelValue: {
        type: [String, Number, Boolean],
        default: ""
      },
      inputValue: {
        type: [String, Number, Boolean],
        default: !1
      },
      name: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      inline: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(e, { emit: t }) {
      const n = B(() => ({
        "cdx-radio--inline": e.inline
      })), r = G(), s = Vt("radio"), i = () => {
        r.value.focus();
      }, o = gn(je(e, "modelValue"), t);
      return {
        rootClasses: n,
        input: r,
        radioId: s,
        focusInput: i,
        wrappedModel: o
      };
    }
  });
  const jD = Jt(Hi), YD = he({
    name: "CdxSearchInput",
    components: {
      CdxButton: cr,
      CdxTextInput: $u
    },
    inheritAttrs: !1,
    props: {
      modelValue: {
        type: [String, Number],
        default: ""
      },
      buttonLabel: {
        type: String,
        default: ""
      },
      status: {
        type: String,
        default: "default",
        validator: jD
      }
    },
    emits: [
      "update:modelValue",
      "submit-click"
    ],
    setup(e, { emit: t, attrs: n }) {
      const r = gn(je(e, "modelValue"), t), s = B(() => ({
        "cdx-search-input--has-end-button": !!e.buttonLabel
      })), {
        rootClasses: i,
        rootStyle: o,
        otherAttrs: u
      } = dr(n, s);
      return {
        wrappedModel: r,
        rootClasses: i,
        rootStyle: o,
        otherAttrs: u,
        handleSubmit: () => {
          t("submit-click", r.value);
        },
        searchIcon: _y
      };
    },
    methods: {
      focus() {
        this.$refs.textInput.focus();
      }
    }
  }), HD = { class: "cdx-search-input__input-wrapper" };
  function WD(e, t, n, r, s, i) {
    const o = qe("cdx-text-input"), u = qe("cdx-button");
    return Y(), oe("div", {
      class: ut(["cdx-search-input", e.rootClasses]),
      style: Mn(e.rootStyle)
    }, [
      Ce("div", HD, [
        pe(o, ir({
          ref: "textInput",
          modelValue: e.wrappedModel,
          "onUpdate:modelValue": t[0] || (t[0] = (l) => e.wrappedModel = l),
          class: "cdx-search-input__text-input",
          "input-type": "search",
          "start-icon": e.searchIcon,
          status: e.status
        }, e.otherAttrs, {
          onKeydown: Tr(e.handleSubmit, ["enter"])
        }), null, 16, ["modelValue", "start-icon", "status", "onKeydown"]),
        it(e.$slots, "default")
      ]),
      e.buttonLabel ? (Y(), Te(u, {
        key: 0,
        class: "cdx-search-input__end-button",
        onClick: e.handleSubmit
      }, {
        default: Ke(() => [
          _t(Ve(e.buttonLabel), 1)
        ]),
        _: 1
      }, 8, ["onClick"])) : Re("", !0)
    ], 6);
  }
  const ju = /* @__PURE__ */ ht(YD, [["render", WD]]), Bd = he({
    name: "CdxSelect",
    components: {
      CdxIcon: nt,
      CdxMenu: Wi
    },
    props: {
      menuItems: {
        type: Array,
        required: !0
      },
      selected: {
        type: [String, Number, null],
        required: !0
      },
      defaultLabel: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      menuConfig: {
        type: Object,
        default: () => ({})
      },
      defaultIcon: {
        type: [String, Object],
        default: void 0
      }
    },
    emits: [
      "update:selected",
      "load-more"
    ],
    setup(e, { emit: t }) {
      const n = G(), r = G(), s = Vt("select-handle"), i = Vt("select-menu"), o = G(!1), u = gn(je(e, "selected"), t, "update:selected"), l = B(
        () => e.menuItems.find((P) => P.value === e.selected)
      ), d = B(() => l.value ? l.value.label || l.value.value : e.defaultLabel), a = Ru(n), c = B(() => {
        var P;
        return `${(P = a.value.width) != null ? P : 0}px`;
      }), f = B(() => {
        if (e.defaultIcon && !l.value)
          return e.defaultIcon;
        if (l.value && l.value.icon)
          return l.value.icon;
      }), m = B(() => ({
        "cdx-select-vue--enabled": !e.disabled,
        "cdx-select-vue--disabled": e.disabled,
        "cdx-select-vue--expanded": o.value,
        "cdx-select-vue--value-selected": !!l.value,
        "cdx-select-vue--no-selections": !l.value,
        "cdx-select-vue--has-start-icon": !!f.value
      })), _ = B(() => {
        var P, $;
        return ($ = (P = r.value) == null ? void 0 : P.getHighlightedMenuItem()) == null ? void 0 : $.id;
      });
      function D() {
        o.value = !1;
      }
      function S() {
        var P;
        e.disabled || (o.value = !o.value, (P = n.value) == null || P.focus());
      }
      function I(P) {
        var $;
        e.disabled || ($ = r.value) == null || $.delegateKeyNavigation(P);
      }
      return {
        handle: n,
        handleId: s,
        menu: r,
        menuId: i,
        modelWrapper: u,
        selectedMenuItem: l,
        highlightedId: _,
        expanded: o,
        onBlur: D,
        currentLabel: d,
        currentWidthInPx: c,
        rootClasses: m,
        onClick: S,
        onKeydown: I,
        startIcon: f,
        cdxIconExpand: kd
      };
    }
  }), Za = () => {
    hu((e) => ({
      46589886: e.currentWidthInPx
    }));
  }, Qa = Bd.setup;
  Bd.setup = Qa ? (e, t) => (Za(), Qa(e, t)) : Za;
  he({
    name: "CdxTab",
    props: {
      name: {
        type: String,
        required: !0
      },
      label: {
        type: String,
        default: ""
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    setup(e) {
      const t = Qn(wd), n = Qn(Cd);
      if (!t || !n)
        throw new Error("Tab component must be used inside a Tabs component");
      const r = t.value.get(e.name) || {}, s = B(() => e.name === n.value);
      return {
        tab: r,
        isActive: s
      };
    }
  });
  he({
    name: "CdxTabs",
    components: {
      CdxButton: cr,
      CdxIcon: nt
    },
    props: {
      active: {
        type: String,
        required: !0
      },
      framed: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:active"
    ],
    expose: [
      "select",
      "next",
      "prev"
    ],
    setup(e, { slots: t, emit: n }) {
      const r = G(), s = G(), i = G(), o = G(), u = G(), l = Od(r), d = B(() => {
        var A;
        const g = [], b = (A = t.default) == null ? void 0 : A.call(t);
        b && b.forEach(H);
        function H(w) {
          w && typeof w == "object" && "type" in w && (typeof w.type == "object" && "name" in w.type && w.type.name === "CdxTab" ? g.push(w) : "children" in w && Array.isArray(w.children) && w.children.forEach(H));
        }
        return g;
      });
      if (!d.value || d.value.length === 0)
        throw new Error("Slot content cannot be empty");
      const a = B(() => d.value.reduce((A, g) => {
        var b;
        if ((b = g.props) != null && b.name && typeof g.props.name == "string") {
          if (A.get(g.props.name))
            throw new Error("Tab names must be unique");
          A.set(g.props.name, {
            name: g.props.name,
            id: Vt(g.props.name),
            label: g.props.label || g.props.name,
            disabled: g.props.disabled
          });
        }
        return A;
      }, /* @__PURE__ */ new Map())), c = gn(je(e, "active"), n, "update:active"), f = B(() => Array.from(a.value.keys())), m = B(() => f.value.indexOf(c.value)), _ = B(() => {
        var A;
        return (A = a.value.get(c.value)) == null ? void 0 : A.id;
      });
      Do(Cd, c), Do(wd, a);
      const D = G(), S = G(), I = zo(D, { threshold: 0.95 }), P = zo(S, { threshold: 0.95 });
      function $(A, g) {
        const b = A;
        b && (g === 0 ? D.value = b : g === f.value.length - 1 && (S.value = b));
      }
      function L(A) {
        var g;
        const b = A === c.value, H = !!((g = a.value.get(A)) != null && g.disabled);
        return {
          "cdx-tabs__list__item--selected": b,
          "cdx-tabs__list__item--enabled": !H,
          "cdx-tabs__list__item--disabled": H
        };
      }
      const z = B(() => ({
        "cdx-tabs--framed": e.framed,
        "cdx-tabs--quiet": !e.framed
      }));
      function fe(A) {
        if (!s.value || !o.value || !u.value)
          return 0;
        const g = l.value === "rtl" ? u.value : o.value, b = l.value === "rtl" ? o.value : u.value, H = A.offsetLeft, w = H + A.clientWidth, ue = s.value.scrollLeft + g.clientWidth, ke = s.value.scrollLeft + s.value.clientWidth - b.clientWidth;
        return H < ue ? H - ue : w > ke ? w - ke : 0;
      }
      function j(A) {
        var g;
        if (!s.value || !o.value || !u.value)
          return;
        const b = A === "next" && l.value === "ltr" || A === "prev" && l.value === "rtl" ? 1 : -1;
        let H = 0, w = A === "next" ? s.value.firstElementChild : s.value.lastElementChild;
        for (; w; ) {
          const ue = A === "next" ? w.nextElementSibling : w.previousElementSibling;
          if (H = fe(w), Math.sign(H) === b) {
            ue && Math.abs(H) < 0.25 * s.value.clientWidth && (H = fe(ue));
            break;
          }
          w = ue;
        }
        s.value.scrollBy({
          left: H,
          behavior: "smooth"
        }), (g = i.value) == null || g.focus();
      }
      return Qe(c, () => {
        if (_.value === void 0 || !s.value || !o.value || !u.value)
          return;
        const A = document.getElementById(`${_.value}-label`);
        !A || s.value.scrollBy({
          left: fe(A),
          behavior: "smooth"
        });
      }), {
        activeTab: c,
        activeTabIndex: m,
        activeTabId: _,
        currentDirection: l,
        rootElement: r,
        listElement: s,
        focusHolder: i,
        prevScroller: o,
        nextScroller: u,
        rootClasses: z,
        tabNames: f,
        tabsData: a,
        firstLabelVisible: I,
        lastLabelVisible: P,
        getLabelClasses: L,
        assignTemplateRefIfNecessary: $,
        scrollTabs: j,
        cdxIconPrevious: gy,
        cdxIconNext: my
      };
    },
    methods: {
      select(e) {
        const t = this.tabsData.get(e);
        t && !(t != null && t.disabled) && (this.activeTab = e);
      },
      selectNonDisabled(e, t) {
        const n = this.tabsData.get(this.tabNames[e + t]);
        n && (n.disabled ? this.selectNonDisabled(e + t, t) : this.select(n.name));
      },
      next() {
        this.selectNonDisabled(this.activeTabIndex, 1);
      },
      prev() {
        this.selectNonDisabled(this.activeTabIndex, -1);
      },
      onLeftArrowKeypress() {
        this.currentDirection === "rtl" ? this.next() : this.prev();
      },
      onRightArrowKeypress() {
        this.currentDirection === "rtl" ? this.prev() : this.next();
      },
      onDownArrowKeypress() {
        var e;
        this.activeTabId && ((e = document.getElementById(this.activeTabId)) == null || e.focus());
      }
    }
  });
  const UD = he({
    name: "CdxToggleButton",
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      },
      quiet: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(e, { emit: t }) {
      const n = G(!1);
      return {
        rootClasses: B(() => ({
          "cdx-toggle-button--quiet": e.quiet,
          "cdx-toggle-button--framed": !e.quiet,
          "cdx-toggle-button--toggled-on": e.modelValue,
          "cdx-toggle-button--toggled-off": !e.modelValue,
          "cdx-toggle-button--is-active": n.value
        })),
        onClick: () => {
          t("update:modelValue", !e.modelValue);
        },
        setActive: (r) => {
          n.value = r;
        }
      };
    }
  }), zD = ["aria-pressed", "disabled"];
  function qD(e, t, n, r, s, i) {
    return Y(), oe("button", {
      class: ut(["cdx-toggle-button", e.rootClasses]),
      "aria-pressed": e.modelValue,
      disabled: e.disabled,
      onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)),
      onKeydown: t[1] || (t[1] = Tr((o) => e.setActive(!0), ["space", "enter"])),
      onKeyup: t[2] || (t[2] = Tr((o) => e.setActive(!1), ["space", "enter"]))
    }, [
      it(e.$slots, "default")
    ], 42, zD);
  }
  const KD = /* @__PURE__ */ ht(UD, [["render", qD]]);
  he({
    name: "CdxToggleButtonGroup",
    components: {
      CdxIcon: nt,
      CdxToggleButton: KD
    },
    props: {
      buttons: {
        type: Array,
        required: !0,
        validator: (e) => Array.isArray(e) && e.length >= 1
      },
      modelValue: {
        type: [String, Number, null, Array],
        required: !0
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(e, { emit: t }) {
      function n(s) {
        return Array.isArray(e.modelValue) ? e.modelValue.indexOf(s.value) !== -1 : e.modelValue !== null ? e.modelValue === s.value : !1;
      }
      function r(s, i) {
        if (Array.isArray(e.modelValue)) {
          const o = e.modelValue.indexOf(s.value) !== -1;
          i && !o ? t("update:modelValue", e.modelValue.concat(s.value)) : !i && o && t("update:modelValue", e.modelValue.filter((u) => u !== s.value));
        } else
          i && e.modelValue !== s.value && t("update:modelValue", s.value);
      }
      return {
        getButtonLabel: Sd,
        isSelected: n,
        onUpdate: r
      };
    }
  });
  he({
    name: "CdxToggleSwitch",
    inheritAttrs: !1,
    props: {
      modelValue: {
        type: Boolean,
        default: !1
      },
      disabled: {
        type: Boolean,
        default: !1
      }
    },
    emits: [
      "update:modelValue"
    ],
    setup(e, { attrs: t, emit: n }) {
      const r = G(), s = Vt("toggle-switch"), {
        rootClasses: i,
        rootStyle: o,
        otherAttrs: u
      } = dr(t), l = gn(je(e, "modelValue"), n);
      return {
        input: r,
        inputId: s,
        rootClasses: i,
        rootStyle: o,
        otherAttrs: u,
        wrappedModel: l,
        clickInput: () => {
          r.value.click();
        }
      };
    }
  });
  he({
    name: "CdxTypeaheadSearch",
    components: {
      CdxIcon: nt,
      CdxMenu: Wi,
      CdxSearchInput: ju
    },
    inheritAttrs: !1,
    props: {
      id: {
        type: String,
        required: !0
      },
      formAction: {
        type: String,
        required: !0
      },
      searchResultsLabel: {
        type: String,
        required: !0
      },
      searchResults: {
        type: Array,
        required: !0
      },
      buttonLabel: {
        type: String,
        default: ""
      },
      initialInputValue: {
        type: String,
        default: ""
      },
      searchFooterUrl: {
        type: String,
        default: ""
      },
      debounceInterval: {
        type: Number,
        default: J1
      },
      highlightQuery: {
        type: Boolean,
        default: !1
      },
      showThumbnail: {
        type: Boolean,
        default: !1
      },
      autoExpandWidth: {
        type: Boolean,
        default: !1
      },
      visibleItemLimit: {
        type: Number,
        default: null
      }
    },
    emits: [
      "input",
      "search-result-click",
      "submit",
      "load-more"
    ],
    setup(e, { attrs: t, emit: n, slots: r }) {
      const { searchResults: s, searchFooterUrl: i, debounceInterval: o } = mo(e), u = G(), l = G(), d = Vt("typeahead-search-menu"), a = G(!1), c = G(!1), f = G(!1), m = G(!1), _ = G(e.initialInputValue), D = G(""), S = B(() => {
        var se, Se;
        return (Se = (se = l.value) == null ? void 0 : se.getHighlightedMenuItem()) == null ? void 0 : Se.id;
      }), I = G(null), P = B(() => ({
        "cdx-typeahead-search__menu-message--has-thumbnail": e.showThumbnail
      })), $ = B(
        () => e.searchResults.find(
          (se) => se.value === I.value
        )
      ), L = B(
        () => i.value ? { value: gr, url: i.value } : void 0
      ), z = B(() => ({
        "cdx-typeahead-search--show-thumbnail": e.showThumbnail,
        "cdx-typeahead-search--expanded": a.value,
        "cdx-typeahead-search--auto-expand-width": e.showThumbnail && e.autoExpandWidth
      })), {
        rootClasses: fe,
        rootStyle: j,
        otherAttrs: A
      } = dr(t, z);
      function g(se) {
        return se;
      }
      const b = B(() => ({
        visibleItemLimit: e.visibleItemLimit,
        showThumbnail: e.showThumbnail,
        boldLabel: !0,
        hideDescriptionOverflow: !0
      }));
      let H, w;
      function ue(se, Se = !1) {
        $.value && $.value.label !== se && $.value.value !== se && (I.value = null), w !== void 0 && (clearTimeout(w), w = void 0), se === "" ? a.value = !1 : (c.value = !0, r["search-results-pending"] && (w = setTimeout(() => {
          m.value && (a.value = !0), f.value = !0;
        }, Z1))), H !== void 0 && (clearTimeout(H), H = void 0);
        const lt = () => {
          n("input", se);
        };
        Se ? lt() : H = setTimeout(() => {
          lt();
        }, o.value);
      }
      function ke(se) {
        if (se === gr) {
          I.value = null, _.value = D.value;
          return;
        }
        I.value = se, se !== null && (_.value = $.value ? $.value.label || String($.value.value) : "");
      }
      function K() {
        m.value = !0, (D.value || f.value) && (a.value = !0);
      }
      function ee() {
        m.value = !1, a.value = !1;
      }
      function V(se) {
        const Se = se, lt = Wo(Se, ["id"]);
        if (lt.value === gr) {
          n("search-result-click", {
            searchResult: null,
            index: s.value.length,
            numberOfResults: s.value.length
          });
          return;
        }
        te(lt);
      }
      function te(se) {
        const Se = {
          searchResult: se,
          index: s.value.findIndex(
            (lt) => lt.value === se.value
          ),
          numberOfResults: s.value.length
        };
        n("search-result-click", Se);
      }
      function He(se) {
        if (se.value === gr) {
          _.value = D.value;
          return;
        }
        _.value = se.value ? se.label || String(se.value) : "";
      }
      function at(se) {
        var Se;
        a.value = !1, (Se = l.value) == null || Se.clearActive(), V(se);
      }
      function Dt(se) {
        if ($.value)
          te($.value), se.stopPropagation(), window.location.assign($.value.url), se.preventDefault();
        else {
          const Se = {
            searchResult: null,
            index: -1,
            numberOfResults: s.value.length
          };
          n("submit", Se);
        }
      }
      function pt(se) {
        if (!l.value || !D.value || se.key === " ")
          return;
        const Se = l.value.getHighlightedMenuItem(), lt = l.value.getHighlightedViaKeyboard();
        switch (se.key) {
          case "Enter":
            Se && (Se.value === gr && lt ? window.location.assign(i.value) : l.value.delegateKeyNavigation(se, !1)), a.value = !1;
            break;
          case "Tab":
            a.value = !1;
            break;
          default:
            l.value.delegateKeyNavigation(se);
            break;
        }
      }
      return xt(() => {
        e.initialInputValue && ue(e.initialInputValue, !0);
      }), Qe(je(e, "searchResults"), () => {
        D.value = _.value.trim(), m.value && c.value && D.value.length > 0 && (a.value = !0), w !== void 0 && (clearTimeout(w), w = void 0), c.value = !1, f.value = !1;
      }), {
        form: u,
        menu: l,
        menuId: d,
        highlightedId: S,
        selection: I,
        menuMessageClass: P,
        footer: L,
        asSearchResult: g,
        inputValue: _,
        searchQuery: D,
        expanded: a,
        showPending: f,
        rootClasses: fe,
        rootStyle: j,
        otherAttrs: A,
        menuConfig: b,
        onUpdateInputValue: ue,
        onUpdateMenuSelection: ke,
        onFocus: K,
        onBlur: ee,
        onSearchResultClick: V,
        onSearchResultKeyboardNavigation: He,
        onSearchFooterClick: at,
        onSubmit: Dt,
        onKeydown: pt,
        MenuFooterValue: gr,
        articleIcon: dy
      };
    },
    methods: {
      focus() {
        this.$refs.searchInput.focus();
      }
    }
  });
  const GD = {
    class: "wikisearch-search",
    "aria-disabled": "false",
    role: "search"
  }, JD = /* @__PURE__ */ he({
    __name: "Search",
    setup(e) {
      const t = mn(), n = B({
        get() {
          return t.term;
        },
        set(r) {
          t.search(r);
        }
      });
      return (r, s) => (Y(), oe("div", GD, [
        pe(xe(ju), {
          modelValue: xe(n),
          "onUpdate:modelValue": s[0] || (s[0] = (i) => ve(n) ? n.value = i : null),
          "button-label": "Search",
          "aria-label": "SearchInput with Button demo",
          clearable: !0
        }, null, 8, ["modelValue"])
      ]));
    }
  }), ZD = { class: "wikisearch-selected" }, QD = /* @__PURE__ */ he({
    __name: "Selected",
    setup(e) {
      const t = mn(), n = B(() => t.selected.map((s) => ({
        ...s,
        label: s.label || s.value,
        value: {
          key: s.key,
          value: s.value
        }
      }))), r = (s) => {
        t.select(t.selected.filter((i) => s.value !== i.value));
      };
      return (s, i) => (Y(), oe("div", ZD, [
        pe(xe($y), {
          buttons: xe(n),
          onClick: r
        }, null, 8, ["buttons"])
      ]));
    }
  }), XD = { class: "wikisearch-filter__label" }, eb = /* @__PURE__ */ he({
    __name: "Filter",
    props: {
      filterName: { type: String, required: !0 }
    },
    setup(e) {
      const t = e, s = mn().config.facetSettings[t.filterName].label || t.filterName.replace("_", " "), i = t.filterName;
      return (o, u) => (Y(), oe("div", {
        class: ut(
          `wikisearch-filter
         wikisearch-filter--${xe(i)}`
        )
      }, [
        Ce("span", XD, [
          Ce("label", null, Ve(xe(s)), 1)
        ]),
        it(o.$slots, "default")
      ], 2));
    }
  }), tb = /* @__PURE__ */ he({
    __name: "Combobox",
    props: {
      filterName: { type: String, required: !0 }
    },
    setup(e) {
      const t = e, r = [mn().aggregations[t.filterName]], s = G("");
      return (i, o) => (Y(), Te(xe($D), {
        selected: s.value,
        "onUpdate:selected": o[0] || (o[0] = (u) => s.value = u),
        "menu-items": xe(r),
        placeholder: "Type or choose an option"
      }, {
        "menu-item": Ke(({ menuItem: u }) => [
          Ce("span", null, Ve(u.value), 1),
          _t(),
          Ce("span", null, Ve(u.count), 1)
        ]),
        _: 1
      }, 8, ["selected", "menu-items"]));
    }
  }), nb = /* @__PURE__ */ he({
    __name: "Checkbox",
    props: {
      filterName: { type: String, required: !0 }
    },
    emits: ["updateSelected"],
    setup(e, { emit: t }) {
      const n = e, r = mn(), s = B(() => n.filterName ? r.aggregations[n.filterName] || [] : []), i = B({
        get() {
          return r.selected.filter((o) => o.key === n.filterName).map((o) => o.value) || [];
        },
        set(o) {
          return t("updateSelected", [
            ...r.selected.filter((u) => u.key !== n.filterName),
            ...o.map((u) => ({
              key: n.filterName,
              value: u
            }))
          ]);
        }
      });
      return (o, u) => (Y(), oe("div", null, [
        (Y(!0), oe(Pe, null, ys(xe(s), (l) => (Y(), Te(xe(tD), {
          key: "checkbox-" + l.value,
          modelValue: xe(i),
          "onUpdate:modelValue": u[0] || (u[0] = (d) => ve(i) ? i.value = d : null),
          "input-value": l.value
        }, {
          default: Ke(() => [
            Ce("span", null, Ve(l.label), 1),
            _t(),
            Ce("span", null, Ve(l.doc_count), 1)
          ]),
          _: 2
        }, 1032, ["modelValue", "input-value"]))), 128))
      ]));
    }
  }), rb = { class: "wikisearch-filters" }, sb = /* @__PURE__ */ he({
    __name: "Filters",
    setup(e) {
      const t = mn(), n = {
        combobox: tb,
        search: ju,
        default: nb
      }, r = Object.entries(t.config.facetSettings).map(([i, o]) => ({
        key: i,
        config: o,
        component: n[o.display] || n.default
      })), s = (i) => {
        t.select(i);
      };
      return (i, o) => (Y(), oe("div", rb, [
        (Y(!0), oe(Pe, null, ys(xe(r), (u) => (Y(), Te(eb, {
          key: "filter-" + u.key,
          filterName: u.key
        }, {
          default: Ke(() => [
            (Y(), Te(uu(u.component), {
              config: u.config,
              filterName: u.key,
              onUpdateSelected: s
            }, null, 40, ["config", "filterName"]))
          ]),
          _: 2
        }, 1032, ["filterName"]))), 128))
      ]));
    }
  }), ib = { class: "wikisearch-total" }, ob = {
    key: 0,
    class: "wikisearch-total__nr"
  }, ub = /* @__PURE__ */ he({
    __name: "Total",
    setup(e) {
      const t = mn(), { total: n } = T0(t);
      return (r, s) => (Y(), oe("div", ib, [
        xe(n) > 0 ? (Y(), oe("b", ob, Ve(xe(n)), 1)) : Re("", !0),
        _t(" " + Ve(r.$i18n("wikisearchfront-total", xe(n))), 1)
      ]));
    }
  }), ab = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [r, s] of t)
      n[r] = s;
    return n;
  }, lb = {}, cb = { class: "wikisearch-action" };
  function db(e, t) {
    return Y(), oe("div", cb);
  }
  const fb = /* @__PURE__ */ ab(lb, [["render", db]]), hb = '<path d="M10 15 2 5h16z"/>', pb = '<path d="m10 5 8 10H2z"/>', mb = '<path d="M1 3h16v2H1Zm0 6h6v2H1Zm0 6h8v2H1Zm8-4.24h3.85L14.5 7l1.65 3.76H20l-3 3.17.9 4.05-3.4-2.14L11.1 18l.9-4.05Z"/>', gb = hb, _b = pb, yb = {
    ltr: mb,
    shouldFlip: !0
  }, Db = { class: "wikisearch-sort" }, bb = /* @__PURE__ */ he({
    __name: "Sort",
    setup(e) {
      const t = G(!1), n = () => {
        t.value = !t.value;
      };
      return (r, s) => (Y(), oe("div", Db, [
        pe(xe(cr), {
          "aria-label": `Toggle ${t.value ? "asc" : "desc"}`,
          title: `Toggle ${t.value ? "asc" : "desc"}`,
          onClick: n
        }, {
          default: Ke(() => [
            pe(xe(nt), {
              icon: t.value ? xe(gb) : xe(_b)
            }, null, 8, ["icon"])
          ]),
          _: 1
        }, 8, ["aria-label", "title"])
      ]));
    }
  }), vb = { class: "wikisearch-results" }, Eb = /* @__PURE__ */ he({
    __name: "Result",
    setup(e) {
      const t = mn(), n = {
        url: "//upload.wikimedia.org/wikipedia/commons/thumb/e/e1/FullMoon2010.jpg/200px-FullMoon2010.jpg"
      }, r = B(() => t.hits);
      return (s, i) => (Y(), oe("div", vb, [
        (Y(!0), oe(Pe, null, ys(xe(r), (o) => (Y(), oe("div", {
          key: "result-" + o._id
        }, [
          pe(xe(Gy), {
            url: o._source.subject.title,
            "force-thumbnail": !0,
            thumbnail: n
          }, {
            title: Ke(() => [
              _t(Ve(o._source.subject.title), 1)
            ]),
            description: Ke(() => [
              _t(" Description text will commonly be longer than a single line, and will wrap onto new lines, expanding the height of the Card to accommodate the content. ")
            ]),
            "supporting-text": Ke(() => [
              pe(xe(nt), {
                icon: xe(yb),
                size: "small"
              }, null, 8, ["icon"]),
              _t(" Supporting text should also be kept short, but if it is long, it will wrap onto a new line like the rest of the Card content. ")
            ]),
            _: 2
          }, 1032, ["url"])
        ]))), 128))
      ]));
    }
  }), wb = { class: "wikisearch" }, Cb = /* @__PURE__ */ he({
    __name: "WikiSearch",
    setup(e) {
      const t = mn(), n = async () => {
        await t.fetchResult();
      };
      return Wl(n), xt(n), (r, s) => (Y(), oe("div", wb, [
        pe(JD),
        pe(QD),
        pe(sb),
        pe(ub),
        pe(fb),
        pe(bb),
        pe(Eb)
      ]));
    }
  }), xb = {
    __name: "PageShell",
    setup(e) {
      return (t, n) => (Y(), Te(Cb));
    }
  }, Ab = {
    en: {
      "wikisearchfront-clear-all-filters": "Clear all filters",
      "wikisearchfront-total": "{{PLURAL:$1|result|results|0=No results}}",
      "wikisearchfront-date-range-from": "Date from",
      "wikisearchfront-date-range-to": "Date to",
      "wikisearchfront-more": "Show more",
      "wikisearchfront-less": "Show less",
      "wikisearchfront-order": "Order by",
      "wikisearchfront-score": "Relevance",
      "wikisearchfront-true": "waar",
      "wikisearchfront-false": "niet waar",
      "wikisearchfront-all": "All",
      "wikisearchfront-page": " / page",
      "wikisearchfront-info": `AND : combine two words <br>
                          OR : one or the other <br>
                          -word : exclude <br> 
                          "word" : exact <br>
                          w*rd : wildecard <br>
                          "word other"~5 : words appart`
    },
    nl: {
      "wikisearchfront-clear-all-filters": "wis alle filters",
      "wikisearchfront-search-total": "{{PLURAL:$1|$1 resultaat|$1 resultatent|0=Geen resultaten}}",
      "wikisearchfront-date-range-from": "Datum vanaf",
      "wikisearchfront-date-range-to": "Datum tot",
      "wikisearchfront-search-order": "Sorteer op",
      "wikisearchfront-search-score": "Relevantie"
    }
  }, Yu = Xp(xb), Fb = k0(), kb = P0({
    locale: "en",
    messages: Ab
  });
  Yu.use(kb);
  Yu.use(Fb);
  Yu.mount("#app");
});
export default Nb();
