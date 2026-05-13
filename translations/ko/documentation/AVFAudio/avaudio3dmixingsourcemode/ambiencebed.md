---
source_path: "documentation/AVFAudio/avaudio3dmixingsourcemode/ambiencebed.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode/ambiencebed"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudio3dmixingsourcemodeambiencebed:0000:0001">AVAudio3DMixingSourceMode.ambienceBed</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingsourcemodeambiencebed:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingsourcemodeambiencebed:0002:0001">입력 채널은 전역 공간에 고정되는 원거리 소스로서 리스너 주변에 분산됩니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudio3dmixingsourcemodeambiencebed:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudio3dmixingsourcemodeambiencebed:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case ambienceBed
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">렌더링은 리스너의 방향에만 의존하고, 리스너 위치에는 의존하지 않습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0002">버스의 오디오 채널 레이아웃은 입력 채널의 방향을 지정합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0003">소스 노드의 방향은 전역 공간에서 베드의 회전을 제어합니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudio3dmixingsourcemode/spatializeifmono.md">AVAudio3DMixingSourceMode.spatializeIfMono</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">모노 입력 버스는 소스 노드의 위치에서 점 소스로 렌더링됩니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudio3dmixingsourcemode/bypass.md">AVAudio3DMixingSourceMode.bypass</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">공간 렌더링을 수행하지 않는 모드입니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudio3dmixingsourcemode/pointsource.md">AVAudio3DMixingSourceMode.pointSource</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">버스의 모든 채널이 소스 노드의 위치에서 단일 소스로 렌더링됩니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudio3dmixingsourcemode/ambiencebed">View on Apple Developer</a>*</span>
