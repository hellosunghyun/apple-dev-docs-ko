---
source_path: "documentation/Accelerate/vu256subs.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vu256subs"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vu256subs:0000:0001">vU256SubS(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu256subs:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu256subs:0002:0001">포화(클리핑)로 처리되는 부호 없는 256비트 뺄셈입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vu256subs:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vu256subs:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vU256SubS(_ a: UnsafePointer<vU256>, _ b: UnsafePointer<vU256>, _ result: UnsafeMutablePointer<vU256>)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vu256add(_:_:_:">func vU256Add(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">부호 없는 256비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="vu256adds(_:_:_:">func vU256AddS(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">부호 없는 256비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="vs256add(_:_:_:">func vS256Add(UnsafePointer&lt;vS256&gt;, UnsafePointer&lt;vS256&gt;, UnsafeMutablePointer&lt;vS256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">부호 있는 256비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="vs256adds(_:_:_:">func vS256AddS(UnsafePointer&lt;vS256&gt;, UnsafePointer&lt;vS256&gt;, UnsafeMutablePointer&lt;vS256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">부호 있는 256비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vu512add(_:_:_:">func vU512Add(UnsafePointer&lt;vU512&gt;, UnsafePointer&lt;vU512&gt;, UnsafeMutablePointer&lt;vU512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">부호 없는 512비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vu512adds(_:_:_:">func vU512AddS(UnsafePointer&lt;vU512&gt;, UnsafePointer&lt;vU512&gt;, UnsafeMutablePointer&lt;vU512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">부호 없는 512비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vs512add(_:_:_:">func vS512Add(UnsafePointer&lt;vS512&gt;, UnsafePointer&lt;vS512&gt;, UnsafeMutablePointer&lt;vS512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">부호 있는 512비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="vs512adds(_:_:_:">func vS512AddS(UnsafePointer&lt;vS512&gt;, UnsafePointer&lt;vS512&gt;, UnsafeMutablePointer&lt;vS512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">부호 있는 512비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="vu1024add(_:_:_:">func vU1024Add(UnsafePointer&lt;vU1024&gt;, UnsafePointer&lt;vU1024&gt;, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">부호 없는 1024비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="vu1024adds(_:_:_:">func vU1024AddS(UnsafePointer&lt;vU1024&gt;, UnsafePointer&lt;vU1024&gt;, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">부호 없는 1024비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="vs1024add(_:_:_:">func vS1024Add(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">부호 있는 1024비트 덧셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="vs1024adds(_:_:_:">func vS1024AddS(UnsafePointer&lt;vS1024&gt;, UnsafePointer&lt;vS1024&gt;, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">부호 있는 1024비트 덧셈(포화, 클리핑)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="vu256sub(_:_:_:">func vU256Sub(UnsafePointer&lt;vU256&gt;, UnsafePointer&lt;vU256&gt;, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">부호 없는 256비트 뺄셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="vs256sub(_:_:_:">func vS256Sub(UnsafePointer&lt;vS256&gt;, UnsafePointer&lt;vS256&gt;, UnsafeMutablePointer&lt;vS256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">부호 있는 256비트 뺄셈(모듈러 산술)입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0036:0001"><a href="vs256subs(_:_:_:">func vS256SubS(UnsafePointer&lt;vS256&gt;, UnsafePointer&lt;vS256&gt;, UnsafeMutablePointer&lt;vS256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">부호 있는 256비트 뺄셈(포화, 클리핑)입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0039:0001">*<a href="https://developer.apple.com/documentation/accelerate/vu256subs(_:_:_:">Apple Developer에서 보기</a>)*</span>
