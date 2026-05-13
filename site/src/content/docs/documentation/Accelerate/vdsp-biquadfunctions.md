---
source_path: "documentation/Accelerate/vdsp-biquadfunctions.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/vdsp-biquadfunctions"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:vdspbiquadfunctions:0000:0001">vDSP_BiquadFunctions</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspbiquadfunctions:0001:0001">**Framework**: Accelerate **Kind**: protocol</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspbiquadfunctions:0002:0001">A protocol that defines functions for biquadratic filtering.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:vdspbiquadfunctions:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:vdspbiquadfunctions:0004:0007">watchOS 6.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
protocol vDSP_BiquadFunctions
```

## <span class="ko-segment" data-segment-id="seg:heading:topics:0007:0001">Topics</span>

### <span class="ko-segment" data-segment-id="seg:heading:associated-types:0008:0001">Associated Types</span>

- <span class="ko-segment" data-segment-id="seg:list:associated-types:0009:0001"><a href="vdsp_biquadfunctions/scalar.md">associatedtype Scalar</a></span>

### <span class="ko-segment" data-segment-id="seg:heading:type-methods:0010:0001">Type Methods</span>

- <span class="ko-segment" data-segment-id="seg:list:type-methods:0011:0001"><a href="vdsp_biquadfunctions/applymulti(setup:pinputs:poutputs:count:">static func applyMulti(setup: vDSP_biquadm_SetupD, pInputs: UnsafeMutablePointer&lt;UnsafePointer&lt;Self.Scalar&gt;&gt;, pOutputs: UnsafeMutablePointer&lt;UnsafeMutablePointer&lt;Self.Scalar&gt;&gt;, count: vDSP_Length)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:type-methods:0011:0002"><a href="vdsp_biquadfunctions/applysingle(source:destination:delays:setup:sectioncount:count:">static func applySingle&lt;U, V&gt;(source: U, destination: inout V, delays: UnsafeMutablePointer&lt;Self.Scalar&gt;, setup: vDSP_biquad_Setup, sectionCount: vDSP_Length, count: vDSP_Length)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:type-methods:0011:0003"><a href="vdsp_biquadfunctions/destroysetup(channelcount:biquadsetup:">static func destroySetup(channelCount: UInt, biquadSetup: OpaquePointer)</a>.md)</span>
- <span class="ko-segment" data-segment-id="seg:list:type-methods:0011:0004">[static func makeBiquadSetup(channelCount: vDSP_Length, coefficients: [Double], sectionCount: vDSP_Length) -&gt; OpaquePointer?](vdsp_biquadfunctions/makebiquadsetup(channelcount:coefficients:sectioncount:).md)</span>

## <span class="ko-segment" data-segment-id="seg:heading:relationships:0012:0001">Relationships</span>

### <span class="ko-segment" data-segment-id="seg:heading:conforming-types:0013:0001">Conforming Types</span>

- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0014:0001"><a href="vdsp/vectorizabledouble.md">vDSP.VectorizableDouble</a></span>
- <span class="ko-segment" data-segment-id="seg:list:conforming-types:0014:0002"><a href="vdsp/vectorizablefloat.md">vDSP.VectorizableFloat</a></span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0015:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="vdsp_floatingpointbiquadfilterable.md">protocol vDSP_FloatingPointBiquadFilterable</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">주어진 함수 인수의 인수 이름을 반환합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">*<a href="https://developer.apple.com/documentation/accelerate/vdsp_biquadfunctions">View on Apple Developer</a>*</span>
