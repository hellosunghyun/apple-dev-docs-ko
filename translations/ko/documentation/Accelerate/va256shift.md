---
source_path: "documentation/Accelerate/va256shift.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/accelerate/va256shift"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:va256shift:0000:0001">vA256Shift(_:_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:va256shift:0001:0001">**Framework**: Accelerate **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:va256shift:0002:0001">256-bit arithmetic shift.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:va256shift:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:va256shift:0004:0001">macOS 10.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func vA256Shift(_ a: UnsafePointer<vS256>, _ shiftAmount: UInt32, _ result: UnsafeMutablePointer<vS256>)
```

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0007:0001">See Also</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0008:0001"><a href="vll256shift(_:_:_:">func vLL256Shift(UnsafePointer&lt;vU256&gt;, UInt32, UnsafeMutablePointer&lt;vU256&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0009:0001">256-bit logical left shift.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avfiletype/ahap.md">static let AHAP: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">Apple Haptics Audio Pattern 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avfiletype/scc.md">static let SCC: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">Scenarist 클로즈드 캡션 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avfiletype/ac3.md">static let ac3: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">AC3 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="va512shift(_:_:_:">func vA512Shift(UnsafePointer&lt;vS512&gt;, UInt32, UnsafeMutablePointer&lt;vS512&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">512-bit arithmetic shift.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="vll1024shift(_:_:_:">func vLL1024Shift(UnsafePointer&lt;vU1024&gt;, UInt32, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">1024-bit logical left shift.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="vlr1024shift(_:_:_:">func vLR1024Shift(UnsafePointer&lt;vU1024&gt;, UInt32, UnsafeMutablePointer&lt;vU1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">1024-bit logical right shift .</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0022:0001"><a href="va1024shift(_:_:_:">func vA1024Shift(UnsafePointer&lt;vS1024&gt;, UInt32, UnsafeMutablePointer&lt;vS1024&gt;)</a>.md)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">Sun/NeXT 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0024:0001"><a href="avfiletype/avci.md">static let avci: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0025:0001">H.264 압축 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0026:0001"><a href="avfiletype/caf.md">static let caf: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0027:0001">Core Audio 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0028:0001"><a href="avfiletype/dcm.md">static let dcm: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0029:0001">디지털 의료 영상 및 통신(DICOM) 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0030:0001"><a href="avfiletype/dng.md">static let dng: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0031:0001">Adobe Digital Negative 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0032:0001"><a href="avfiletype/eac3.md">static let eac3: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0033:0001">향상된 AC3 오디오 파일 형식의 UTI입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0034:0001"><a href="avfiletype/heic.md">static let heic: AVFileType</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0035:0001">HEVC 압축 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0037:0001">모든 코덱의 압축 이미지를 포함하는 고효율 이미지 파일 형식의 UTI입니다.</span>
