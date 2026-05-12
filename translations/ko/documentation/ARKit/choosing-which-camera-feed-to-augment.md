---
source_path: "documentation/ARKit/choosing-which-camera-feed-to-augment.md"
upstream_sha: "8a29a1d75e67151b588206d3e921a4ff212726be"
translation_status: machine_translated
official_url: "https://developer.apple.com/documentation/arkit/choosing-which-camera-feed-to-augment"
official: false
---

> 비공식 번역입니다. 정확한 최신 내용은 원문을 확인하세요.

# <span class="ko-segment" data-segment-id="seg:heading:choosing-which-camera-feed-to-augment:0000:0001">증강할 카메라 피드 선택</span>

<span class="ko-segment" data-segment-id="seg:paragraph:choosing-which-camera-feed-to-augment:0001:0001">**프레임워크**: ARKit</span>

<span class="ko-segment" data-segment-id="seg:paragraph:choosing-which-camera-feed-to-augment:0002:0001">AR 경험에서 전면 또는 후면 카메라를 통해 사용자 환경에 시각 효과를 추가합니다.</span>

#### <span class="ko-segment" data-segment-id="seg:heading:overview:0003:0001">Overview</span>

<span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0001">iOS 기기는 여러 카메라가 장착되어 있으며, 각 ARKit 세션마다 어떤 카메라 피드를 증강할지 선택해야 합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:overview:0004:0002">ARKit 3 이상에서는 모든 카메라의 앵커를 동시에 제공합니다(참조: <a href="combining-user-face-tracking-and-world-tracking.md">@@TOKEN_0@@</a>), 그러나 한 번에 사용자에게 표시할 카메라 피드는 한 가지만 선택해야 합니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:augmented-reality-with-the-rear-camera:0005:0001">후면 카메라로 구현하는 증강 현실</span>

<span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-rear-camera:0006:0001">가장 일반적인 AR 경험은 장치의 후면 카메라 영상을 기반으로, 다른 시각 콘텐츠를 겹쳐 사용자에게 주변 세상을 새롭게 보고 상호작용할 수 있는 방식을 제공합니다.</span>

<span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-rear-camera:0007:0001"><a href="arworldtrackingconfiguration.md">@@TOKEN_0@@</a>은 이러한 경험을 제공합니다. ARKit은 사용자가 있는 실제 세계를 추적하고, 가상 콘텐츠를 배치할 좌표 공간과 일치시킵니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-rear-camera:0007:0002">월드 추적은 또한 사용자 환경의 객체와 이미지를 인식하고 실제 조명 조건에 반응하는 기능을 제공해 AR 경험을 더 몰입감 있게 만듭니다.</span>

##### <span class="ko-segment" data-segment-id="seg:heading:augmented-reality-with-the-front-camera:0008:0001">전면 카메라로 구현하는 증강 현실</span>

<span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-front-camera:0009:0001">TrueDepth 카메라가 있는 iOS 기기에서는 <a href="arfacetrackingconfiguration.md">@@TOKEN_0@@</a>을 사용해 전면 카메라 피드를 증강할 수 있으며, 얼굴의 자세와 표정을 실시간으로 추적합니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-front-camera:0009:0002">이 정보를 이용하면 예를 들어 사실적인 가상 마스크를 오버레이하도록 선택할 수 있습니다.</span> <span class="ko-segment" data-segment-id="seg:paragraph:augmented-reality-with-the-front-camera:0009:0003">또는 카메라 보기를 생략하고 iMessage용 Animoji 앱처럼 얼굴 표정 데이터를 사용해 가상 캐릭터를 애니메이션할 수도 있습니다.</span>

## <span class="ko-segment" data-segment-id="seg:heading:see-also:0010:0001">참고 항목</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0011:0001"><a href="managing-session-life-cycle-and-tracking-quality.md">Managing Session Life Cycle and Tracking Quality</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0012:0001">현재 세션 상태를 사용자에게 알리고 중단에서 복구합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0013:0001"><a href="displaying-an-ar-experience-with-metal.md">Displaying an AR Experience with Metal</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0014:0001">카메라 피드 위에 앱의 가상 콘텐츠 렌더링을 제어합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0015:0001"><a href="arsession.md">class ARSession</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0016:0001">이 객체는 모션 추적, 카메라 패스스루, 이미지 분석 등 모든 AR 경험과 관련된 주요 작업을 관리합니다.</span>

- <span class="ko-segment" data-segment-id="seg:list:see-also:0017:0001"><a href="configuration-objects.md">Configuration Objects</a></span>

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0018:0001">증강 현실 세션을 구성하여 특정 유형의 콘텐츠를 감지하고 추적합니다.</span>

---

<span class="ko-segment" data-segment-id="seg:paragraph:see-also:0020:0001">*<a href="https://developer.apple.com/documentation/arkit/choosing-which-camera-feed-to-augment">View on Apple Developer</a>*</span>
