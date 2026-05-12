---
source_path: "documentation/ARKit/capturing-body-motion-in-3d.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/capturing-body-motion-in-3d"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:capturing-body-motion-in-3d:0000:0001">3D에서 신체 움직임 캡처</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-body-motion-in-3d:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-body-motion-in-3d:0002:0001">물리적 환경에서 사람을 추적하고 동일한 신체 동작을 가상 캐릭터에 적용해 그 동작을 시각화합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:capturing-body-motion-in-3d:0003:0001">**Availability**:</span>

- <span class="ko-segment" data-segment-id="seg:list:capturing-body-motion-in-3d:0004:0001">iOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-body-motion-in-3d:0004:0002">iPadOS 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-body-motion-in-3d:0004:0003">Mac Catalyst 13.0+</span>
- <span class="ko-segment" data-segment-id="seg:list:capturing-body-motion-in-3d:0004:0004">Xcode 16.0+</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0005:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0006:0001">샘플을 실행하려면 A12 칩 이상이 장착된 iOS 기기를 사용합니다.</span>

> <span class="ko-segment" data-segment-id="seg:blockquote:overview:0007:0001">**참고**: 이 샘플 코드 프로젝트는 WWDC 2019 세션 <a href="https://developer.apple.comhttps://developer.apple.com/videos/play/wwdc19/607/">@@TOKEN_0@@</a>와 연관됩니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0008:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0009:0001"><a href="rigging-a-model-for-motion-capture.md">Rigging a Model for Motion Capture</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0010:0001">ARKit의 사람 신체 추적 기능이 제어할 수 있도록 사용자 지정 3D 모델을 구성합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="validating-a-model-for-motion-capture.md">Validating a Model for Motion Capture</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">캐릭터 모델이 ARKit의 Motion Capture 요구사항을 충족하는지 확인합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="arbodyanchor.md">class ARBodyAnchor</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">후면 카메라에서 사람의 위치와 움직임을 추적하는 앵커입니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">*<a href="https://developer.apple.com/documentation/arkit/capturing-body-motion-in-3d">View on Apple Developer</a>*</span>
