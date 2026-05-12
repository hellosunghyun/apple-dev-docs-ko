---
source_path: "documentation/AVFAudio/avaudioenvironmentoutputtype/auto.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/avfaudio/avaudioenvironmentoutputtype/auto"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:avaudioenvironmentoutputtypeauto:0000:0001">AVAudioEnvironmentOutputType.auto</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentoutputtypeauto:0001:0001">**Framework**: AVFAudio **Kind**: case</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentoutputtypeauto:0002:0001">재생 경로를 자동으로 감지하고 올바른 출력을 선택합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:avaudioenvironmentoutputtypeauto:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0003">Mac Catalyst 13.1+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0004">macOS 10.15+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0005">tvOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:avaudioenvironmentoutputtypeauto:0004:0006">visionOS 1.0+</span>

## <span class="ko-segment" data-segment-id="seg:heading:declaration:0005:0001">Declaration</span>

```swift
case auto
```

#### <span class="ko-segment" data-segment-id="seg:heading:discussion:0007:0001">Discussion</span>

<span class="ko-segment" data-segment-id="seg:paragraph:discussion:0008:0001">자동 출력 유형을 사용할 경우, 유선 출력은 <a href="avaudioenvironmentoutputtype/headphones.md">@@TOKEN_0@@</a>로 기본 설정되며, 2채널 출력 레이아웃에서 수동 렌더링은 <a href="avaudioenvironmentoutputtype/externalspeakers.md">@@TOKEN_1@@</a>로 기본 설정됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0009:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0010:0001"><a href="avaudioenvironmentoutputtype/headphones.md">AVAudioEnvironmentOutputType.headphones</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0011:0001">헤드폰용 오디오 출력을 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0012:0001"><a href="avaudioenvironmentoutputtype/builtinspeakers.md">AVAudioEnvironmentOutputType.builtInSpeakers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0013:0001">현재 하드웨어의 내장 스피커용 오디오 출력을 렌더링합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0014:0001"><a href="avaudioenvironmentoutputtype/externalspeakers.md">AVAudioEnvironmentOutputType.externalSpeakers</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0015:0001">오디오 환경 노드의 출력 채널 레이아웃에 따라 외부 스피커용 오디오 출력을 렌더링합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0017:0001">*<a href="https://developer.apple.com/documentation/avfaudio/avaudioenvironmentoutputtype/auto">View on Apple Developer</a>*</span>
