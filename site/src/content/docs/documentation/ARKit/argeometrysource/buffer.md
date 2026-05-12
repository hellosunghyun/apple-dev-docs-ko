---
source_path: "documentation/ARKit/argeometrysource/buffer.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/argeometrysource/buffer"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:buffer:0000:0001">buffer</span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer:0001:0001">**Framework**: ARKit **Kind**: property</span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer:0002:0001">벡터 목록을 포함하는 Metal 버퍼입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:buffer:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:buffer:0004:0001">iOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:buffer:0004:0002">iPadOS 13.4+</span>
- <span class="ko-segment" data-segment-id="seg:list:buffer:0004:0003">Mac Catalyst 13.4+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var buffer: any MTLBuffer { get }
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">The framework clamps this to between <code>0</code> and <code>30</code> Hz.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">각 벡터에는 <a href="argeometrysource/componentspervector.md">@@TOKEN_0@@</a>에서 정의된 여러 스칼라가 포함될 수 있습니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Otherwise, ARKit automatically corrects the image anchor’s transform when <code>estimatedScaleFactor</code> is a value other than 1.0.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="argeometrysource/subscript(_:">subscript(Int32) -&gt; (Float, Float, Float)</a>-3v98f.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">지정된 인덱스의 소스 float triplet를 제공합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="argeometrysource/subscript(_:">subscript(Int32) -&gt; CUnsignedChar</a>-7jf4y.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">지정된 인덱스의 숫자를 제공합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/arkit/argeometrysource/buffer">View on Apple Developer</a>*</span>
