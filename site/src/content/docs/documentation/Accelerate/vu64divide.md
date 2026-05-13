---
source_path: "documentation/Accelerate/vu64divide.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vu64divide"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vu64divide:0000:0001">vU64Divide(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu64divide:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu64divide:0002:0001">Unsigned 64-bit division.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu64divide:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vu64divide:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vU64Divide(_ vN: vUInt32, _ vD: vUInt32, _ vRemainder: UnsafeMutablePointer<vUInt32>?) -> vUInt32
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vu64adds(_:_:">func vU64AddS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">*<a href="https://developer.apple.com/documentation/accelerate/chbtrd_(_:_:_:_:_:_:_:_:_:_:_:_:">Apple Developer에서 보기</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vs64adds(_:_:">func vS64AddS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Signed 64-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vu128add(_:_:">func vU128Add(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Unsigned 128-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vu128adds(_:_:">func vU128AddS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">Unsigned 128-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vs128add(_:_:">func vS128Add(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">Signed 128-bit addition (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vs128adds(_:_:">func vS128AddS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">Signed 128-bit addition with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vu64subs(_:_:">func vU64SubS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">Unsigned 64-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vs64subs(_:_:">func vS64SubS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Signed 64-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vu128sub(_:_:">func vU128Sub(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">Unsigned 128-bit subtraction (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vu128subs(_:_:">func vU128SubS(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Unsigned 128-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vs128sub(_:_:">func vS128Sub(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">Signed 128-bit subtraction (modular arithmetic).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vs128subs(_:_:">func vS128SubS(vSInt32, vSInt32) -&gt; vSInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Signed 128-bit subtraction with saturation (clipping).</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vu8halfmultiply(_:_:">func vU8HalfMultiply(vUInt8, vUInt8) -&gt; vUInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">Unsigned 8-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vs8halfmultiply(_:_:">func vS8HalfMultiply(vSInt8, vSInt8) -&gt; vSInt8</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">Signed 8-bit multiplication; results are same width as multiplicands.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vu32halfmultiply(_:_:">func vU32HalfMultiply(vUInt32, vUInt32) -&gt; vUInt32</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">Unsigned 32-bit multiplication; results are same width as multiplicands.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vu64divide(_:_:_:">View on Apple Developer</a>)*</span>
