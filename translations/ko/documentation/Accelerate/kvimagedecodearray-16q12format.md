---
source_path: "documentation/Accelerate/kvimagedecodearray-16q12format.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/kvimagedecodearray-16q12format"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:kvimagedecodearray16q12format:0000:0001">kvImageDecodeArray_16Q12Format</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedecodearray16q12format:0001:0001">**Framework**: Accelerate **Kind**: var</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedecodearray16q12format:0002:0001">Predefined decode array constant to use with 16Q12-formatted data.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:kvimagedecodearray16q12format:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:kvimagedecodearray16q12format:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
var kvImageDecodeArray_16Q12Format: UnsafePointer<CGFloat>!
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">ImmersiveMediaSupport framework의 VenueDescriptor.aimeData에서 기원한 Apple Immersive Video의 정적 프리젠테이션 메타데이터, Apple Immersive Media Embedded(AIME)입니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">This integer is implicitly divided by 2¹² to give a range of [-8,8] (<code>SHRT_MIN</code><code>/4096</code>,<code>SHRT_MAX</code><code>/4096</code>).</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">The type is present to allow 8-bit content to be converted into other colorspaces and operated on without undue loss of precision or loss of color gamut due to clamping.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0004">This is identified by address.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0005">Copying the values here causes a Core Graphics (CG) format to be instead interpreted as an unsigned 16-bit format.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0001">Pixels in 16Q12 format don’t follow CG image format conventions in two respects.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0002">First, the format is signed; second, the alpha channel is also subject to the decode array transform, meaning that 0 is transparent and 4096 is opaque.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0009:0003">Consequently, all buffers that use this format must be tagged with the <a href="kvimagedecodearray_16q12format.md">@@TOKEN_0@@</a> decode array.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0011:0001">*<a href="https://developer.apple.com/documentation/accelerate/kvimagedecodearray_16q12format">View on Apple Developer</a>*</span>
