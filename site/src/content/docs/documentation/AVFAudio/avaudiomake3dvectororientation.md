---
source_path: "documentation/AVFAudio/avaudiomake3dvectororientation.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudiomake3dvectororientation"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudiomake3dvectororientation:0000:0001">AVAudioMake3DVectorOrientation(_:_:)</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiomake3dvectororientation:0001:0001">**Framework**: AVFAudio **Kind**: func</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiomake3dvectororientation:0002:0001">지정한 forward 벡터와 up 벡터를 사용해 3D 벡터 방향 인스턴스를 생성합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudiomake3dvectororientation:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0001">iOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0002">iPadOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0003">Mac Catalyst ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0004">macOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0006">visionOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudiomake3dvectororientation:0004:0007">watchOS ?+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
func AVAudioMake3DVectorOrientation(_ forward: AVAudio3DVector, _ up: AVAudio3DVector) -> AVAudio3DVectorOrientation
```

#### <span class="ko-segment" data-segment-id="seg:heading:return-value:0007:0001">반환 값</span>

<span class="ko-segment" data-segment-id="seg:paragraph:return-value:0008:0001">새 <a href="avaudiomake3dvectororientation(_:_:">@@TOKEN_0@@</a>.md) 객체입니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:parameters:0009:0001">Parameters</span>

- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0001"><code>forward</code>: forward 벡터는 청취자가 바라보는 방향을 가리킵니다.</span>
- <span class="ko-segment" data-segment-id="seg:list:parameters:0010:0002"><code>up</code>: up 벡터는 forward 벡터와 직교하며 청취자의 머리 위쪽을 가리킵니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0011:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudio3dvectororientation/init.md">init()</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">3D 벡터 방향 인스턴스를 생성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudiosequencer/infodictionarykey/copyright.md">init(forward: AVAudio3DVector, up: AVAudio3DVector)</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">지정한 forward 벡터와 up 벡터를 사용하여 3D 벡터 방향 인스턴스를 생성합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudiomake3dvectororientation(_:_:">Apple Developer에서 보기</a>)*</span>
