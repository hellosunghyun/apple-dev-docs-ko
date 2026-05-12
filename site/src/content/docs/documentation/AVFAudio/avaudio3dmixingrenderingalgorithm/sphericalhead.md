---
source_path: "documentation/AVFAudio/avaudio3dmixingrenderingalgorithm/sphericalhead.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm/sphericalhead"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudio3dmixingrenderingalgorithmsphericalhead:0000:0001">AVAudio3DMixingRenderingAlgorithm.sphericalHead</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithmsphericalhead:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithmsphericalhead:0002:0001">양측 청각 간 시간 지연과 기타 공간 단서를 시뮬레이션하여 헤드폰에서 3D 공간을 에뮬레이션하는 알고리즘입니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingrenderingalgorithmsphericalhead:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0001">iOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0002">iPadOS 8.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0004">macOS 10.10+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0005">tvOS ?+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0006">visionOS 1.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingrenderingalgorithmsphericalhead:0004:0007">watchOS 2.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case sphericalHead
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">이는 <a href="avaudio3dmixingrenderingalgorithm/hrtf.md">@@TOKEN_0@@</a>보다 CPU 사용량이 약간 적습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudio3dmixingrenderingalgorithm/auto.md">AVAudio3DMixingRenderingAlgorithm.auto</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">현재 재생 하드웨어에서 사용 가능한 최고 품질 렌더링 알고리즘을 자동으로 선택합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudio3dmixingrenderingalgorithm/equalpowerpanning.md">AVAudio3DMixingRenderingAlgorithm.equalPowerPanning</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">믹서 버스의 데이터를 스테레오 필드로 패닝하는 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudio3dmixingrenderingalgorithm/hrtf.md">AVAudio3DMixingRenderingAlgorithm.HRTF</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudio3dvectororientation/init(forward:up:">View on Apple Developer</a>)*</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0016:0001"><a href="avaudio3dmixingrenderingalgorithm/hrtfhq.md">AVAudio3DMixingRenderingAlgorithm.HRTFHQ</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">더 높은 품질의 헤드 관련 전달 함수 렌더링 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0018:0001"><a href="avaudio3dmixingrenderingalgorithm/soundfield.md">AVAudio3DMixingRenderingAlgorithm.soundField</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0019:0001">멀티채널 하드웨어에 렌더링하는 알고리즘입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0020:0001"><a href="avaudio3dmixingrenderingalgorithm/stereopassthrough.md">AVAudio3DMixingRenderingAlgorithm.stereoPassThrough</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0021:0001">소스 데이터에 지역화가 필요하지 않을 때 사용하는 알고리즘입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0023:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudio3dmixingrenderingalgorithm/sphericalhead">View on Apple Developer</a>*</span>
